import { Button } from "components/FormComponents";
import Input from "components/FormComponents/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useStyles from "./style";

type IMailId = {
  email: string;
};

const ForgotPassword = () => {
  const { handleSubmit, control, formState } = useForm<IMailId>({
    defaultValues: { email: "" },
    criteriaMode: "all",
    mode: "all",
  });
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { errors, isValid } = formState;

  const onMailEnter: SubmitHandler<IMailId> = (data) => {
    console.log(data);
    const email = data.email;
  };

  return (
    <div className={classes.forgotPassWrapper}>
      <div className={classes.forgotPassText}>
        <p className={classes.forgotPassTextTop}>Forgot your password?</p>
        <p className={classes.forgotPassTextTop}>
          Enter your registered email to receive a four-digit code to continue
          to reset your password.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onMailEnter)}
        className={classes.formWrapper}
      >
        <Input
          label="Registered Email"
          name="email"
          control={control}
          rules={{
            required: "Email is Required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid Email" },
          }}
          errors={errors}
        />
        <Button
          label="Continue"
          type="submit"
          disabled={!isValid}
          className={classes.loginBtnValid}
        />
      </form>
      {/* <div className={classes.footer}>
        <p className={classes.footerParagraph}>
          I don’t have an account. &nbsp;
          <span>
            <Link to="" className={classes.footerLink}>
              Request an invitation now
            </Link>
          </span>
        </p>
      </div> */}
    </div>
  );
};

export default ForgotPassword;
