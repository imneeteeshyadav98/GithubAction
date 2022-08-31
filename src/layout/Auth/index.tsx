import { Box } from "@material-ui/core";
import HeaderLogo from "layout/Auth/HeaderLogo";
import SideBanner from "layout/Auth/SideBanner";
import { ReactNode } from "react";
import useStyles from "./style";

type AuthLayoutProps = {
  children: ReactNode;
  showBanner?: boolean;
};

const AuthLayout = ({ children, showBanner = true }: AuthLayoutProps) => {
  const classes = useStyles(showBanner);

  return (
    <Box className={classes.layoutWrapper}>
      <Box className={classes.layoutBody}>
        <HeaderLogo />
        {children}
      </Box>
      {showBanner && (
        <Box className={classes.banner}>
          <SideBanner />
        </Box>
      )}
    </Box>
  );
};

export default AuthLayout;
