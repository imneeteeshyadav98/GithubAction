import {
  Breadcrumbs as MatBreadcrumbs,
  Link,
  LinkProps,
  Typography,
} from "@material-ui/core";
import { capitalize } from "utils/helper";
import { useMemo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => (
  <Link {...props} component={RouterLink as any} />
);

const BreadCrumbBar = () => {
  const { pathname } = useLocation();

  const paths = useMemo(
    () => pathname.split("/").filter((item) => item),
    [pathname]
  );

  return (
    <MatBreadcrumbs aria-label="breadcrumb">
      {paths.map((path, idx) => {
        const last = idx === paths.length - 1;
        const to = `/${paths.slice(0, idx + 1).join("/")}`;
        const pathName = capitalize(path);

        return last ? (
          <Typography color="inherit" key={to}>
            {pathName}
          </Typography>
        ) : (
          <LinkRouter color="secondary" key={to} to={to}>
            {pathName}
          </LinkRouter>
        );
      })}
    </MatBreadcrumbs>
  );
};

export default BreadCrumbBar;
