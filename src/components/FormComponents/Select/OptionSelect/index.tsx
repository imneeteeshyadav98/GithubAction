import { ErrorMessage } from "@hookform/error-message";
import {
  MenuItem,
  SelectProps,
  TextField,
  TextFieldProps,
} from "@material-ui/core";
import ErrorComponent from "components/FormComponents/Error";
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import useStyles from "./style";

type OptionSelectProps<T> = UseControllerProps<T> &
  TextFieldProps &
  SelectProps & {
    errors?: FieldErrors;
    resourceName: string;
    customUrl?: string;
    inputLabelProps?: any;
    selectProps?: any;
    options: any;
  };

const OptionSelect = <T extends FieldValues>({
  name,
  control,
  label,
  fullWidth = true,
  errors,
  variant = "outlined",
  options,
  inputLabelProps = {},
  selectProps = {},
  placeholder,
  ...rest
}: OptionSelectProps<T>) => {
  const classes = useStyles();

  const renderValue = (value) => {
    if (value) {
      const optionLabel = options.find((option) => option.value === value);
      return optionLabel.label;
    } else {
      return placeholder || "Select";
    }
  };

  return (
    <div className={classes.inputWrapper}>
      <Controller
        render={({ field }) => (
          <TextField
            select
            error={!!errors[name]}
            variant={variant}
            fullWidth={fullWidth}
            label={label}
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
            InputLabelProps={{
              classes: { root: classes.inputLabel },
              shrink: true,
              ...inputLabelProps,
            }}
            SelectProps={{
              labelWidth: 100,
              displayEmpty: true,
              renderValue,
              ...selectProps,
            }}
            {...rest}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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

export default OptionSelect;
