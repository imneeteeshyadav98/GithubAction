import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  entityButton: {
    width: "170px",
    height: "40spx",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.19,
    textTransform: "none",
    textDecoration: "none",
    marginLeft: "5px",
    fontFamily: theme.typography.fontFamily,
    color:"black"
  },
}));

export default useStyles;
