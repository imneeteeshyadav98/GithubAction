import PublishIcon from "@material-ui/icons/Publish";
import { AxiosError } from "axios";
import { Button, FileUpload } from "components/FormComponents";
import fetcher from "dataProvider";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import useStyles from "./style";

type CSVUploadProps = {
  name: string;
  handleOpenPipelineModal: () => void;
};

const CSVUpload = ({ name, handleOpenPipelineModal }: CSVUploadProps) => {
  const { handleSubmit, control, formState } = useForm();

  const { mutate, isLoading } = useMutation(
    (data: any) => {
      return fetcher.post(``, JSON.stringify(data)); //put upload url
    },
    {
      onSuccess: (resData) => {},
      onError: (err: AxiosError) => {
        console.log(err);
      },
    }
  );

  const classes = useStyles();

  const { errors, isValid } = formState;

  const onFormSubmit = (data) => mutate(data);

  return (
    <div className={classes.paper}>
      <form
        className={classes.formWrapper}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <FileUpload
          name={name}
          control={control}
          uploadComp={<PublishIcon classes={{ root: classes.uploadBtn }} />}
          accept=".csv"
          errors={errors}
        />
        <div className={classes.buttonWrapper}>
          <Button
            label="Cancel"
            onClick={handleOpenPipelineModal}
            className={classes.cancelBtn}
          />
          <Button
            label="Yes"
            type="submit"
            disabled={!isValid || isLoading}
            className={classes.loginBtnValid}
            onClick={handleOpenPipelineModal}
          />
        </div>
      </form>
      <div className={classes.closeModal}>
        <img
          src="/icons/icon-cancel.svg"
          alt="closeModal"
          onClick={handleOpenPipelineModal}
        />
      </div>
    </div>
  );
};

export default CSVUpload;
