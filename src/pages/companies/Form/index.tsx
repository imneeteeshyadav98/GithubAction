import { Input, Radio } from "components/FormComponents";
import { Control, FieldErrors } from "react-hook-form";
import useStyles from "./style";

type FormProps = {
  control: Control<any>;
  disabled?: boolean;
  errors: FieldErrors;
};

const Form = ({ control, errors, disabled }: FormProps) => {
  const classes = useStyles();

  return (
    <>
      <Input
        name="name"
        label="Company Name"
        placeholder="Enter Company Name"
        control={control}
        rules={{
          required: "Required Field",
          maxLength: { value: 50, message: "Name does not exceed 50" },
        }}
        errors={errors}
        inputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        disabled={disabled}
      />
      <Input
        name="email"
        label="Email Id"
        placeholder="Enter Email Id"
        rules={{
          required: "Email is Required",
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid Email" },
        }}
        control={control}
        errors={errors}
        inputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        classes={{ root: classes.inputMargin }}
        disabled={disabled}
      />
      <Input
        name="business_id"
        label="Business Id"
        placeholder="Enter Business Id"
        control={control}
        rules={{
          required: "Required Field",
          maxLength: { value: 50, message: "Name does not exceed 50" },
        }}
        errors={errors}
        inputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        classes={{ root: classes.inputMargin }}
        disabled={disabled}
      />
      <Input
        name="address"
        label="Address"
        placeholder="Enter Address"
        control={control}
        rules={{
          required: "Required Field",
        }}
        errors={errors}
        inputLabelProps={{
          shrink: true,
        }}
        multiline
        minRows="4"
        variant="outlined"
        classes={{ root: classes.inputMargin }}
        disabled={disabled}
      />
      <Radio
        name="status"
        masterLabel="Select Status"
        control={control}
        errors={errors}
        options={[
          { label: "Active", value: "true" },
          { label: "Inactive", value: "false" },
        ]}
        disabled={disabled}
      />
    </>
  );
};

export default Form;
