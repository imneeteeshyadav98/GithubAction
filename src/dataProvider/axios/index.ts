import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { logoutUser } from "redux/actions";
import store from "redux/store";

const instance = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

const userSessionActive = (value: {
  accessToken: string;
  refreshToken: string;
}) => {
  localStorage.setItem(ACCESS_TOKEN, value.accessToken);
  localStorage.setItem(REFRESH_TOKEN, value.refreshToken);
};

let isRefreshing = false;
let failedUserQueue = [];

const processQueue = (error: AxiosError, token = null) => {
  failedUserQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });
  failedUserQueue.length = 0;
};

const handleRequest = (req: AxiosRequestConfig) => {
  if (req.url !== "/api/v1/admin/login")
    req.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  return req;
};

const handleResponse = (res: AxiosResponse<any>) => {
  if (res?.config && res.config.url === "/api/v1/admin/login") {
    /**
     * set token if user is verified
     */
    userSessionActive({
      accessToken: res.headers["x-access-token"],
      refreshToken: res.headers["x-refresh-token"],
    });
  }
  return res;
};

const handleError = async (
  error: AxiosError<any>,
  instanceErr: AxiosInstance,
  failedQueue: any[]
) => {
  const status = error.response ? error.response.status : null;
  const originalRequest = error.config;
  if (
    status === 401 &&
    error.config.url !== "/api/v1/oauth/refresh-token" &&
    error.config.url !== "api/v1/admin/login"
  ) {
    /**
     * if access-token is expired, get new access-token from refresh-token and retry requests
     */

    if (isRefreshing) {
      /**
       * if refresh token api is pending, adding new request to failed queue
       */
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then((accessToken) => {
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return instanceErr(originalRequest);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }

    isRefreshing = true;
    return instance
      .post("/api/v1/oauth/refresh-token", {
        refreshToken: localStorage.getItem(REFRESH_TOKEN),
      })
      .then(async (res) => {
        const accessToken = res?.data && res.data.access_token;
        const refreshToken = res?.data && res.data.refresh_token;
        userSessionActive({ accessToken, refreshToken });

        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;

        /**
         * processing all the failed request with new access token
         */
        return instanceErr(originalRequest)
          .then((originalResponse) => {
            processQueue(null, accessToken);
            return originalResponse;
          })
          .catch((originalError) => {
            processQueue(originalError, null);
            return Promise.reject(originalError);
          });
      })
      .catch((err: AxiosError) => {
        if (err.response.status === 401 || 403) store.dispatch(logoutUser());
        return Promise.reject(err);
      })
      .finally(() => {
        isRefreshing = false;
      });
  }
  return Promise.reject(error);
};

instance.interceptors.request.use(handleRequest);

instance.interceptors.response.use(handleResponse, (error) =>
  handleError(error, instance, failedUserQueue)
);

export default instance;
