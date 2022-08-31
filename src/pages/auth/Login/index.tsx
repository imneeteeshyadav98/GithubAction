import { IconButton, InputAdornment } from "@material-ui/core";
import { AxiosError } from "axios";
import { Button, Input } from "components/FormComponents";
import fetcher from "dataProvider";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { loginUser } from "redux/actions";
import { RootState } from "redux/reducers";
import useStyles from "./style";

type ILoginForm = {
  email: string;
  password: string;
  username: string;
};

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const { handleSubmit, control, formState, setError } = useForm<ILoginForm>({
    defaultValues: { email: "", password: "" },
    criteriaMode: "all",
    mode: "all",
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const { errors, isValid } = formState;

  const match = useRouteMatch();

  const { mutate, isLoading } = useMutation(
    (loginData: any) => {
      return fetcher.post(`/api/v1/admin/login`, JSON.stringify(loginData));
    },
    {
      onSuccess: (resData) => {
        const username = resData.data.username;
        dispatch(loginUser(username));
      },
      onError: (err: AxiosError) => {
        setError("password", { type: "custom", message: err.message });
      },
    }
  );

  useEffect(() => {
    if (isLoggedIn) history.replace(`${match.url}games`);
  }, [history, isLoggedIn, match.url]);

  const onLogin: SubmitHandler<ILoginForm> = (data) => {
    return isLoading || mutate(data);
  };

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.headerMsg}>Login</div>
      <form onSubmit={handleSubmit(onLogin)} className={classes.formWrapper}>
        <Input
          label="Registered Email"
          name="email"
          control={control}
          rules={{
            required: "Required field",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid Email" },
          }}
          errors={errors}
        />
        <Input
          label="Password"
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          type={!passwordVisibility ? "password" : "text"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setPasswordVisibility((visibility) => !visibility)
                  }
                >
                  <img
                    src={
                      passwordVisibility
                        ? "/icons/icon-eye-open.svg"
                        : "/icons/icon-eye-closed.svg"
                    }
                    alt="eye-icon"
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          classes={{ root: classes.inputMargin }}
          errors={errors}
        />
        {/* <Typography
          style={{
            textDecoration: "none",
            textAlign: "right",
            marginLeft: "auto",
          }}
        >
          <Link to="/forgot-password" className={classes.forgotPass}>
            <span>Forgot Password?</span>
          </Link>
        </Typography> */}
        <div className={classes.chkBoxBtnwrapper}>
          <Button
            label="Continue"
            type="submit"
            disabled={!isValid}
            className={classes.loginBtnValid}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
