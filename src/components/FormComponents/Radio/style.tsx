import { makeStyles, Theme } from "@material-ui/core";

export interface StyleProps {
  [key: string]: any;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  radioColor: {
    color: theme.palette.custom.checkbox,
    "&$checked": {
      color: theme.palette.custom.checkbox,
    },
  },
  masterLabel: (styles) => ({
    display: "inline-block",
    marginTop: "25px",
    fontSize: "16px",
    fontWeight: "bold",
    letterSpacing: "0.32px",
    color: theme.palette.text.secondary,
    ...styles.masterLabelStyles,
  }),
  radioLabel: (styles) => ({
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "0.4px",
    color: theme.palette.text.primary,
    ...styles.labelStyles,
  }),
  checked: {},
}));
export default useStyles;
