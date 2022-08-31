import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  isLoggedIn: boolean;
  username:string;
  forgotPassword: {
    email: string;
    verificationCode: string;
  };
}

const initialState: IUser = {
  isLoggedIn: false,
  username:"",
  forgotPassword: {
    email: "",
    verificationCode: "",
  },
};



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state,action) => {
      state.isLoggedIn = true;
      state.username=action.payload
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
    setForgotPasswordData: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      state.forgotPassword = {
        ...state.forgotPassword,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const { loginUser, logoutUser, setForgotPasswordData } =
  userSlice.actions;

export default userSlice.reducer;
