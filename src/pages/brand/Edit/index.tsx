import { CircularProgress } from "@material-ui/core";
import { Button } from "components/FormComponents";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { UseMutationResult } from "react-query";
import Form from "../Form";
import useStyles from "./style";

type EditBrandProps = UseMutationResult & {
  onSubmit: (data: any) => void;
  preFilledData: any;
  loading: boolean;
  eventType?: string;
  disabled: boolean;
};

const EditBrand = ({
  onSubmit,
  isLoading,
  preFilledData,
  loading,
  disabled,
}: EditBrandProps) => {
  const { handleSubmit, control, formState, reset } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const classes = useStyles();

  const { errors, isValid } = formState;

  useEffect(() => {
    if (!loading) {
      reset(preFilledData);
    }
  }, [preFilledData, loading, reset]);

  const onFormSubmit: SubmitHandler<any> = (data) => onSubmit(data);

  if (loading) return <CircularProgress />;

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={classes.formWrapper}>
      <Form control={control} errors={errors} disabled={disabled} />
      <Button
        label="Register Brand"
        type="submit"
        disabled={!isValid || isLoading}
        className={classes.loginBtnValid}
      />
    </form>
  );
};

export default EditBrand;
