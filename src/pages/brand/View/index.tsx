import { CircularProgress } from "@material-ui/core";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { UseMutationResult } from "react-query";
import Form from "../Form";
import useStyles from "./style";

type ViewBrandProps = UseMutationResult & {
  onSubmit: (data: any) => void;
  preFilledData: any;
  loading: boolean;
  eventType?: string;
  disabled: boolean;
};

const ViewBrand = ({ preFilledData, loading, disabled }: ViewBrandProps) => {
  const { control, formState, reset } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  const classes = useStyles();

  const { errors } = formState;

  useEffect(() => {
    if (!loading) {
      reset(preFilledData);
    }
  }, [preFilledData, loading, reset]);

  if (loading) return <CircularProgress />;

  return (
    <form className={classes.formWrapper}>
      <Form control={control} errors={errors} disabled={disabled} />
    </form>
  );
};

export default ViewBrand;
