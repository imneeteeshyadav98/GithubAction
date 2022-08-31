import AuthLayout from "layout/Auth";
import DashboardLayout from "layout/Dashboard";
import DefaultLayout from "layout/Default";
import { ComponentType, FC } from "react";
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

type LayoutVariant = "auth" | "dashboard" | "default";

type AppRouteProps = {
  component: ComponentType;
  path: string;
  layoutVariant?: LayoutVariant;
  privateRoute?: boolean;
  showBanner?: boolean;
  exact?: boolean;
} & RouteComponentProps;

type LayoutMapping = {
  [key in LayoutVariant]: FC;
};

const layoutMapping: LayoutMapping = {
  default: DefaultLayout,
  auth: AuthLayout,
  dashboard: DashboardLayout,
};

const AppRoute = (props: AppRouteProps) => {
  const {
    layoutVariant,
    component: Component,
    privateRoute = false,
    exact = false,
    ...rest
  } = props;

  const LayoutComponent = layoutMapping[layoutVariant || "default"];

  return (
    <LayoutComponent {...rest}>
      {privateRoute ? (
        <PrivateRoute exact={exact} component={Component} {...rest} />
      ) : (
        <Route exact={exact} component={Component} {...rest} />
      )}
    </LayoutComponent>
  );
};

export default withRouter(AppRoute);
