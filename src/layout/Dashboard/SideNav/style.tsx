import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    hide: {
      display: "none",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    sideNavParent: {
      backgroundColor: theme.palette.grey[400],
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default useStyles;
