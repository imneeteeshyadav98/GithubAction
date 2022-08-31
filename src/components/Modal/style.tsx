import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  modal: {
    position: "absolute!important" as "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiBackdrop-root": {
      position: "absolute",
      backgroundColor: "rgba(20, 20, 20, 0.2)",
    },
    overflow: "hidden",
  },
  paper: {
    width: "39%",
    height: "max-content",
    backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
  },
}));

export default useStyles;
