import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    margin: "0 2%",
    "& .MuiAppBar-root": {
      alignItems: "flex-end",
      boxShadow: "none",
      // padding: "0 25px",
      paddingTop: "36px",
      paddingBottom: "24px",
    },
    "& .MuiToolbar-regular": {
      minHeight: "auto",
      padding: "0",
    },
    "& .MuiPaper-elevation4": {},
  },
}));

export default useStyles;
