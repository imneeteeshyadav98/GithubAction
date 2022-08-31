import { AxiosError } from "axios";
import fetcher from "dataProvider";
import { ComponentType } from "react";
import { useMutation } from "react-query";
import useStyles from "./style";
import history from "router/history";

type CreateProps = {
  name?: string;
  component?: ComponentType<any>;
};

const Create = ({ name, component: Form }: CreateProps) => {
  const classes = useStyles();

  const { mutate, isLoading } = useMutation(
    (data: any) => fetcher.post(`api/v1/${name}`, JSON.stringify(data)),
    {
      onSuccess: (resData) => {
        history.goBack();
      },
      onError: (err: AxiosError) => {
        console.log(err);
      },
    }
  );

  return (
    <div className={classes.newProjectWrapper}>
      <Form onSubmit={mutate} isLoading={isLoading} />
    </div>
  );
};

export default Create;
