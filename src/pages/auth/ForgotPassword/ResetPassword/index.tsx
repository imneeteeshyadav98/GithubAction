import { Button } from "components/FormComponents";
import Password from "components/FormComponents/Password";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { RootState } from "redux/reducers";
import useStyles from "./style";

type IResetPassword = {
  newPassword: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const { handleSubmit, control, formState, getValues } =
    useForm<IResetPassword>({
      defaultValues: { newPassword: "", confirmPassword: "" },
      criteriaMode: "all",
      mode: "all",
    });

  const classes = useStyles();
  const history = useHistory();

  const { errors, isValid, dirtyFields } = formState;
  const { forgotPassword } = useSelector((state: RootState) => state.user);

  const onSetPass: SubmitHandler<IResetPassword> = (data) => {
    const password = data.newPassword;
    const { verificationCode, email } = forgotPassword;
  };

  return (
    <div className={classes.forgotPasswordWrapper}>
      <div className={classes.forgotPassText}>
        <p className={classes.forgotPassTextTop}>Reset Password</p>
        <p className={classes.forgotPassTextTop}>
          Your account is confirmed. Please continue to reset your password.
        </p>
      </div>
      <div className={classes.errorMessage}>
        {dirtyFields.confirmPassword &&
          getValues().newPassword !== getValues().confirmPassword && (
            <div className={classes.errorText}>
              <img
                src="/icons/icon-alert.svg"
                alt="alertIcon"
                className={classes.alertIcon}
              />
              <p>Passwords do not match. Please try again.</p>
            </div>
          )}
      </div>
      <form onSubmit={handleSubmit(onSetPass)} className={classes.formWrapper}>
        <Password
          name="newPassword"
          label="Choose a New Password"
          control={control}
          errors={errors}
          rules={{
            required: true,
            validate: {
              isLength: (value) => value.length >= 8,
              isUpper: (value) => RegExp("(.*[A-Z].*)").test(value.toString()),
              isLower: (value) => RegExp("(.*[a-z].*)").test(value.toString()),
              isNum: (value) => RegExp("(.*\\d.*)").test(value.toString()),
              isSymbol: (value) =>
                RegExp(/[^\p{L}\d\s]/u).test(value.toString()),
            },
          }}
        />
        <Password
          name="confirmPassword"
          label="Confirm Password"
          control={control}
          classes={{ root: classes.inputMargin }}
          errors={errors}
          rules={{
            required: true,
            validate: {
              isLength: (value) => value.length >= 8,
              isUpper: (value) => RegExp("(.*[A-Z].*)").test(value.toString()),
              isLower: (value) => RegExp("(.*[a-z].*)").test(value.toString()),
              isNum: (value) => RegExp("(.*\\d.*)").test(value.toString()),
              isSymbol: (value) =>
                RegExp(/[^\p{L}\d\s]/u).test(value.toString()),
              isSame: (value) => value === getValues().newPassword,
            },
          }}
        />
        <Button
          label="Continue"
          type="submit"
          disabled={!isValid}
          className={classes.loginBtnValid}
        />
      </form>
    </div>
  );
};

export default ResetPassword;
