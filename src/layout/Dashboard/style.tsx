import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  header: {
    boxShadow: "none",
  },
  content: {
    height: "calc(100vh - 72px)",
    overflow: "auto",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  dashboardBody: {
    position: "relative", //for modal to cover only content page not the side bars
    flex: "1",
    height: "100vh",
    backgroundColor: theme.palette.grey[200],
  },
}));

export default useStyles;
