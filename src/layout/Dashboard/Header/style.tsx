import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "space-between",
    padding: "8px 28px 0 20px",
  },
  title: {
    flexGrow: 1,
  },
  header: {
    boxShadow: "none",
  },
}));

export default useStyles;
