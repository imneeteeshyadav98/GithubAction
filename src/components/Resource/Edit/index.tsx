import { AxiosError } from "axios";
import fetcher from "dataProvider";
import { ComponentType } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router";
import history from "router/history";
import useStyles from "./style";

type EditProps = {
  name?: string;
  component?: ComponentType<any>;
};

type EditParams = {
  id: string;
};

const Edit = ({ name, component: Form }: EditProps) => {
  const classes = useStyles();
  const { id } = useParams<EditParams>();

  const { data: preFilledData, isLoading: loading } = useQuery(
    [name, id],
    () => fetcher.get(`/api/v1/${name}/${id}`),
    {
      enabled: !!id,
    }
  );

  const { mutate } = useMutation(
    (data: any) => {
      const deleteId = data.id;
      delete data.id;
      return fetcher.patch(`api/v1/${name}/${deleteId}`, data);
    },
    {
      onSuccess: (resData) => {
        history.goBack();
      },
      onError: (err: AxiosError) => {},
    }
  );

  return (
    <div className={classes.newProjectWrapper}>
      <Form
        onSubmit={mutate}
        preFilledData={preFilledData?.data}
        loading={loading}
      />
    </div>
  );
};

export default Edit;
