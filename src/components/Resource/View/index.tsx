import fetcher from "dataProvider";
import { ComponentType } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import useStyles from "./style";

type ViewProps = {
  name?: string;
  component?: ComponentType<any>;
};

type ViewParams = {
  id: string;
};

const View = ({ name, component: Form }: ViewProps) => {
  const classes = useStyles();
  const { id } = useParams<ViewParams>();

  const { data, isLoading: loading } = useQuery(
    [name, id],
    () => fetcher.get(`/api/v1/${name}/${id}`),
    {
      enabled: !!id,
    }
  );

  return (
    <div className={classes.newProjectWrapper}>
      <Form preFilledData={data?.data} loading={loading} disabled />
    </div>
  );
};

export default View;
