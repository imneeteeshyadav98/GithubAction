import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio as MatRadio,
  RadioGroup as MatRadioGroup,
  RadioGroupProps as MatRadioGroupProps,
  RadioProps as MatRadioProps,
} from "@material-ui/core";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import useStyles from "./style";

type RadioProps = FieldValues &
  MatRadioProps &
  MatRadioGroupProps & {
    errors?: FieldErrors;
    radioBtnType?: "smiley" | "radio";
  };

const Radio = ({
  name,
  control,
  row = true,
  masterLabel,
  errors,
  options,
  formControlProps,
  labelProps,
  defaultValue = "",
  disabled = false,
  rules,
  styles,
  radioBtnType = "radio",
  ...rest
}: RadioProps) => {
  const classes = useStyles(styles);

  const renderRadio = (radioEntity, idx) => (
    <FormControlLabel
      value={radioEntity.value}
      key={idx}
      control={
        <MatRadio
          classes={{
            root: classes.radioColor,
            checked: classes.checked,
          }}
          {...(radioBtnType === "smiley"
            ? {
                icon: (
                  <img
                    src={
                      radioEntity.icons.unChecked.url ||
                      `/icons/${radioEntity.icons.unChecked.name}.svg`
                    }
                    alt={radioEntity.icons.unChecked.name}
                  />
                ),
                checkedIcon: (
                  <img
                    src={
                      radioEntity.icons.checked.url ||
                      `/icons/${radioEntity.icons.checked.name}.svg`
                    }
                    alt={radioEntity.icons.checked.name}
                  />
                ),
              }
            : {})}
          {...rest}
        />
      }
      label={radioEntity.label}
      classes={{ label: classes.radioLabel }}
    />
  );

  return (
    <Controller
      render={({ field }) => (
        <FormControl
          {...formControlProps}
          required={!!rules?.required}
          disabled={disabled}
        >
          <FormLabel {...labelProps} className={classes.masterLabel}>
            {masterLabel}
          </FormLabel>
          <MatRadioGroup
            row={row}
            value={
              typeof field.value === "boolean" ? field.value + "" : field.value
            }
            onChange={field.onChange}
            {...rest}
          >
            {options.map(renderRadio)}
          </MatRadioGroup>
        </FormControl>
      )}
      name={name}
      control={control}
      defaultValue={options.length === 1 ? options[0].value : defaultValue}
      rules={rules}
      {...rest}
    />
  );
};

export default Radio;
