import { Button } from "components/FormComponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { UseMutationResult } from "react-query";
import Form from "../Form";
import useStyles from "./style";

type CreateCompaniesProps = UseMutationResult & {
  onSubmit: (data: any) => void;
  preFilledData: any;
  loading: boolean;
  eventType?: string;
  disabled: boolean;
};

const CreateCompanies = ({
  onSubmit,
  isLoading,
  disabled,
}: CreateCompaniesProps) => {
  const { handleSubmit, control, formState } = useForm({
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      business_id: "",
      status: "",
      id: "",
      address: "",
    },
  });

  const classes = useStyles();

  const { errors, isValid } = formState;

  const onFormSubmit: SubmitHandler<any> = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={classes.formWrapper}>
      <Form control={control} errors={errors} disabled={disabled} />
      <Button
        label="Register Company"
        type="submit"
        disabled={!isValid || isLoading}
        className={classes.loginBtnValid}
      />
    </form>
  );
};

export default CreateCompanies;
