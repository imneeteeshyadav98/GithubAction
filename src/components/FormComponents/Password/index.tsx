import {
  Fade,
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
  Tooltip,
} from "@material-ui/core";
import { useState } from "react";
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import useStyles from "./style";
import Validation from "./Validation";

type PasswordProps<T> = UseControllerProps<T> &
  TextFieldProps & { errors?: FieldErrors };

const Password = <T extends FieldValues>({
  name,
  control,
  label,
  fullWidth = true,
  errors,
  rules,
  ...rest
}: PasswordProps<T>) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const classes = useStyles();

  return (
    <div className={classes.inputWrapper}>
      <Controller
        render={({ field }) => (
          <Tooltip
            title={<Validation name={name} errors={errors} />}
            open={openTooltip}
            TransitionComponent={Fade}
            classes={{ tooltip: classes.tooltip, arrow: classes.tooltipArrow }}
            TransitionProps={{ timeout: 600 }}
            arrow
            placement="right"
          >
            <TextField
              fullWidth={fullWidth}
              label={label}
              value={field.value}
              onChange={field.onChange}
              onFocus={() => setOpenTooltip(true)}
              onBlur={() => setOpenTooltip(false)}
              inputRef={field.ref}
              InputLabelProps={{ classes: { root: classes.inputLabel } }}
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
              {...rest}
            />
          </Tooltip>
        )}
        name={name}
        control={control}
        rules={rules}
        {...rest}
      />
    </div>
  );
};

export default Password;
