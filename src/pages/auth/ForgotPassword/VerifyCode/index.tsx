import { Button } from "components/FormComponents";
import OtpInput from "components/OtpInput";
import Timer from "components/Timer";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { setForgotPasswordData } from "redux/actions";

import useStyles from "./style";

type IOtpCode = {
  verifyCode: string;
};

const VerifyCode = () => {
  const { handleSubmit, control, formState } = useForm<IOtpCode>({
    defaultValues: { verifyCode: "" },
    criteriaMode: "all",
    mode: "all",
  });

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { isValid } = formState;
  const onCodeEnter: SubmitHandler<IOtpCode> = (data) => {
    dispatch(
      setForgotPasswordData({ key: "verificationCode", value: data.verifyCode })
    );
  };

  const time = useMemo(() => {
    const dateObj = new Date();
    return dateObj.setSeconds(dateObj.getSeconds() + 300); // 5 minutes timer
  }, []);

  return (
    <div className={classes.forgotPassWrapper}>
      <div className={classes.forgotPassText}>
        <div className={classes.forgotPassTextTop}>
          Enter the four-digit code we sent you via registered email to
          continue.
        </div>
        <div className={classes.codeTimer}>
          Code expires in <Timer expiryTimestamp={time} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onCodeEnter)}
        className={classes.formWrapper}
      >
        <OtpInput
          name="verifyCode"
          control={control}
          numInputs={6}
          rules={{ required: true, minLength: 6 }}
        />
        <Button
          label="Continue"
          type="submit"
          disabled={!isValid}
          className={classes.loginBtnValid}
        />
      </form>
      <div className={classes.footer}>
        <p className={classes.footerParagraph}>
          Haven’t received the email?
          <span>
            &nbsp;
            <Link to="" className={classes.footerLink}>
              Resend Email
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyCode;
