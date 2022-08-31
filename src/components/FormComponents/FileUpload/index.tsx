import { ErrorMessage } from "@hookform/error-message";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import DescriptionIcon from "@material-ui/icons/Description";
import { ReactNode } from "react";
import { Controller, FieldErrors, FieldValues } from "react-hook-form";
import ErrorComponent from "../Error";
import useStyles from "./style";

type FileUploadProps = FieldValues & {
  uploadComp?: ReactNode;
  accept?: string;
  errors?: FieldErrors;
};

const FileUpload = ({
  name,
  control,
  uploadComp,
  accept,
  multiple = false,
  errors,
  label = "Upload",
  uploadDesc,
  rules,
  ...rest
}: FileUploadProps) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Controller
        render={({ field }) => (
          <>
            <input
              name={name}
              className={classes.input}
              id={name}
              accept={accept}
              type="file"
              multiple={multiple}
              onChange={(e) => field.onChange(e.target.files)}
              {...rest}
            />
            <label htmlFor={name}>
              {uploadComp || (
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  {label}
                </Button>
              )}
            </label>
            <label className={classes.label}>{uploadDesc}</label>
            {field.value &&
              Object.keys(field.value).map((val) => (
                <Chip
                  className={classes.chip}
                  icon={<DescriptionIcon />}
                  label={field.value[val].name}
                  onDelete={() => {
                    const file = { ...field.value };
                    delete file[val];
                    const outputFile =
                      Object.keys(file).length > 0 ? { ...file } : null;
                    field.onChange(outputFile);
                  }}
                  color="primary"
                />
              ))}
          </>
        )}
        name={name}
        control={control}
        rules={rules}
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
export default FileUpload;
