import { ErrorMessage } from "@hookform/error-message";
import { TextField, TextFieldProps } from "@material-ui/core";
import { Autocomplete as MatAutocomplete } from "@material-ui/lab";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import ErrorComponent from "../Error";
import useStyles from "./style";

type Option = {
  title: string;
  value: string;
};

type AutocompleteProps = FieldValues &
  TextFieldProps & {
    errors?: FieldErrors;
  };

const Autocomplete = ({
  name,
  control,
  label,
  type = "text",
  fullWidth = true,
  inputLabelProps = {},
  clearOnEscape = true,
  autoCompleteProps = {},
  errors,
  options = [],
  ...rest
}: AutocompleteProps) => {
  const classes = useStyles();

  return (
    <div className={classes.inputWrapper}>
      <Controller
        render={({ field }) => (
          <MatAutocomplete
            options={options as Option[]}
            fullWidth={fullWidth}
            clearOnEscape
            getOptionLabel={(option: Option) => option.title}
            onChange={(event: any, newValue: string | null) => {
              field.onChange(newValue);
            }}
            {...rest}
            {...autoCompleteProps}
            renderInput={(params) => (
              <TextField
                {...params}
                error={!!errors[name]}
                label={label}
                type={type}
                inputRef={field.ref}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
                InputLabelProps={{
                  classes: { root: classes.inputLabel },
                  ...inputLabelProps,
                }}
                {...rest}
              />
            )}
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
export default Autocomplete;
