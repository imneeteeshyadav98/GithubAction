import { AppBar, Toolbar } from "@material-ui/core";
import { memo, ReactNode } from "react";
import useStyles from "./style";

type EntityHeaderProps = {
  children: ReactNode;
};

const EntityHeader = memo(({ children }: EntityHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </div>
  );
});

export default EntityHeader;
