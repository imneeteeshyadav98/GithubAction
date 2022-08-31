import { Button } from "components/FormComponents";
import { ComponentType } from "react";
import { Redirect, Switch } from "react-router-dom";
import AppRoute from "router/AppRoute";
import { capitalize } from "utils/helper";
import Create from "./Create";
import Edit from "./Edit";
import List from "./List";
import useStyles from "./style";
import View from "./View";

type ResourceProps = {
  name: string;
  list?: ComponentType<any>;
  create?: ComponentType<any>;
  edit?: ComponentType<any>;
  view?: ComponentType<any>;
  deleteAction?: boolean;
  exportData?: boolean;
  uploadData?: boolean;
};

const Resource = ({
  name,
  list: ListComp,
  create: CreateComp,
  edit: EditComp,
  view: ViewComp,
  deleteAction = false,
  exportData = false,
  uploadData = false,
}: ResourceProps) => {
  const classes = useStyles();

  const Btn = ({ label }) => (
    <Button
      as="LinkButton"
      to={`/${name}/${label}`}
      label={`${capitalize(label)} ${capitalize(name)}`}
      className={classes.entityButton}
    />
  );

  return (
    <Switch>
      <AppRoute
        path={`/${name}/list`}
        exact
        component={() => (
          <List
            name={name}
            component={ListComp}
            createBtn={!!CreateComp && <Btn label="create" />}
            viewAction={!!ViewComp}
            editAction={!!EditComp}
            deleteAction={deleteAction}
            exportBtn={exportData}
            uploadBtn={uploadData}
          />
        )}
      />
      <AppRoute
        path={`/${name}/create`}
        exact
        component={() =>
          !!CreateComp ? (
            <Create name={name} component={CreateComp} />
          ) : (
            <Redirect to={name} />
          )
        }
      />
      <AppRoute
        path={`/${name}/:id/view`}
        exact
        component={() =>
          !!ViewComp ? (
            <View name={name} component={ViewComp} />
          ) : (
            <Redirect to={name} />
          )
        }
      />
      <AppRoute
        path={`/${name}/:id/edit`}
        exact
        component={() =>
          !!EditComp ? (
            <Edit name={name} component={EditComp} />
          ) : (
            <Redirect to={name} />
          )
        }
      />
      <AppRoute
        path="/"
        component={() => (
          <Redirect
            to={`/${name}/${
              (!!ListComp && "list") ||
              (!!CreateComp && "create") ||
              (!!ViewComp && "read") ||
              (!!EditComp && "edit")
            }`}
          />
        )}
      />
    </Switch>
  );
};

export default Resource;
