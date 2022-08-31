import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import OtpInput, { OtpInputProps } from "react-otp-input";
import useStyles from "./style";

type InputProps<T> = UseControllerProps<T> & Partial<OtpInputProps>;

const OTPInput = <T extends FieldValues>({
  name,
  numInputs = 4,
  control,
  isInputNum = true,
  rules,
  ...rest
}: InputProps<T>) => {
  const classes = useStyles();

  return (
    <Controller
      render={({ field }) => (
        <OtpInput
          isInputNum={isInputNum}
          shouldAutoFocus
          numInputs={numInputs}
          inputStyle={classes.otpField}
          {...field}
        />
      )}
      name={name}
      control={control}
      rules={rules}
      {...rest}
    />
  );
};

export default OTPInput;
