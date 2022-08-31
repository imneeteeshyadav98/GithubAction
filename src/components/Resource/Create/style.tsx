import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  newProjectWrapper: {
    width: "100%",
    marginTop: "7.3%",
    marginBottom: "22.4%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "@media(min-width:1366px)": {
      marginTop: "84.5px",
    },
    "& .MuiTypography-body1": {
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "1.19",
      letterSpacing: "-0.35px",
      color: theme.palette.text.secondary,
    },
    "& .MuiInputBase-input": {
      fontWeight: 300,
      fontSize: "16px",
      lineHeight: "1.19",
      letterSpacing: "-0.35px",
      color: theme.palette.text.secondary,
      "&::placeholder": {
        fontWeight: 300,
        opacity: 1,
        fontSize: "16px",
        lineHeight: "1.19",
        letterSpacing: "-0.35px",
        color: theme.palette.text.secondary,
      },
    },
    "& .MuiFormLabel-root": {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "1.19",
      letterSpacing: "-0.35px",
      color: theme.palette.text.secondary,
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(1)",
      background: `${theme.palette.primary.contrastText} !important`,
      padding: "0 8px 0 0 !important",
    },
  },
  formWrapper: {
    width: "26.6%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& .MuiFormControl-root": {
      marginBottom: "36px",
    },
  },
}));

export default useStyles;
