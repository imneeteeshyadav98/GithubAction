import { ErrorMessage } from "@hookform/error-message";
import { TextField, TextFieldProps } from "@material-ui/core";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import ErrorComponent from "../Error";
import useStyles from "./style";

type InputProps = FieldValues & TextFieldProps & { errors?: FieldErrors };

const Input = ({
  name,
  control,
  label,
  type = "text",
  fullWidth = true,
  inputLabelProps = {},
  errors,
  ...rest
}: InputProps) => {
  const classes = useStyles();

  return (
    <div className={classes.inputWrapper}>
      <Controller
        render={({ field }) => (
          <TextField
            error={!!errors[name]}
            fullWidth={fullWidth}
            label={label}
            type={type}
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
            InputLabelProps={{
              classes: { root: classes.inputLabel },
              ...inputLabelProps,
            }}
            {...rest}
          />
        )}
        name={name}
        control={control}
        {...rest}
      />
      {errors && (
        <ErrorMessage
          name={name}
          errors={errors}
          render={(errorObj) => <ErrorComponent message={errorObj.message} />}
        />
      )}
    </div>
  );
};
export default Input;
