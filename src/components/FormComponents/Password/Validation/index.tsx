import { FieldErrors, FieldValues, UseControllerProps } from "react-hook-form";
import useStyles from "./style";

export type ErrorMapping = {
  key: string;
  label: string;
};

type ValidationProps<T> = UseControllerProps<T> & {
  errors?: FieldErrors;
};

const Validation = <T extends FieldValues>({
  name,
  errors,
}: ValidationProps<T>) => {
  const classes = useStyles();
  const errorsMapping: ErrorMapping[] = [
    { key: "isLength", label: "8 Characters" },
    { key: "isUpper", label: "1 UpperCase" },
    { key: "isLower", label: "1 Lowercase" },
    { key: "isNum", label: "1 Number" },
    { key: "isSymbol", label: "1 Symbol" },
  ];

  const renderValidationKeys = (validationItem: ErrorMapping) => {
    return (
      <div
        className={
          errors[name].types[validationItem.key]
            ? classes.keys
            : classes.keysTrue
        }
      >
        {errors[name].types[validationItem.key] ? (
          <img
            src="/icons/icon-minus.svg"
            alt="dashIcon"
            className={classes.icon}
          />
        ) : (
          <img
            src="/icons/icon-check.svg"
            alt="checkIcon"
            className={classes.iconTrue}
          />
        )}
        <div className={classes.keyLabel}>{validationItem.label}</div>
      </div>
    );
  };

  const renderBeforeKeys = (validationItem: ErrorMapping) => {
    return (
      <div className={classes.keys}>
        <img
          src="/icons/icon-minus.svg"
          alt="dashIcon"
          className={classes.icon}
        />
        <div className={classes.keyLabel}>{validationItem.label}</div>
      </div>
    );
  };

  return (
    <>
      {errors[name] ? (
        <div className={classes.validationWrapper}>
          <p className={classes.errorLabel}>Password must contain:</p>
          {errorsMapping.map(renderValidationKeys)}
        </div>
      ) : (
        <div className={classes.validationWrapper}>
          <p className={classes.errorLabel}>Password must contain:</p>
          {errorsMapping.map(renderBeforeKeys)}
        </div>
      )}
    </>
  );
};

export default Validation;
