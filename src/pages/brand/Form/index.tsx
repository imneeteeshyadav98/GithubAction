import {
  Autocomplete,
  FileUpload,
  Input,
  Radio,
} from "components/FormComponents";
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
        label="Brand Name"
        placeholder="Enter Brand Name"
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
        name="short_description"
        label="Short Description"
        placeholder="Enter Short Description"
        control={control}
        rules={{
          required: "Required Field",
        }}
        errors={errors}
        inputLabelProps={{
          shrink: true,
        }}
        multiline
        maxRows={4}
        variant="outlined"
        classes={{ root: classes.inputMargin }}
        disabled={disabled}
      />

      <Input
        name="website_link"
        label="Website Link"
        placeholder="Enter Website Link"
        control={control}
        rules={{
          required: "Required Field",
          maxLength: { value: 120, message: "Name does not exceed 120" },
        }}
        errors={errors}
        inputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        classes={{ root: classes.inputMargin }}
        disabled={disabled}
      />
      <Autocomplete
        name="business_id"
        label="Business Id"
        placeholder="Search/select ID"
        // options={options}
        // renderOption={(option) => renderMember(option)}
        errors={errors}
        control={control}
        rules={{ required: true }}
        inputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        disabled={disabled}
      />
      <FileUpload
        name="logo"
        control={control}
        accept="image/*"
        errors={errors}
        uploadDesc="Upload a Logo"
        disabled={disabled}
      />
      <Radio
        name="status"
        masterLabel="Select Status"
        control={control}
        errors={errors}
        options={[
          { label: "On", value: "true" },
          { label: "Off", value: "false" },
        ]}
        disabled={disabled}
      />
    </>
  );
};

export default Form;
