import { Button } from "components/FormComponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { UseMutationResult } from "react-query";
import Form from "../Form";
import useStyles from "./style";

type CreateBrandProps = UseMutationResult & {
  onSubmit: (data: any) => void;
};

const CreateBrand = ({ onSubmit, isLoading }: CreateBrandProps) => {
  const { handleSubmit, control, formState } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const classes = useStyles();

  const { errors, isValid } = formState;

  const onFormSubmit: SubmitHandler<any> = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={classes.formWrapper}>
      <Form control={control} errors={errors} />
      <Button
        label="Register Brand"
        type="submit"
        disabled={!isValid || isLoading}
        className={classes.loginBtnValid}
      />
    </form>
  );
};

export default CreateBrand;
