import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  inputLabel: {
    color: theme.palette.text.secondary,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "1.19",
    letterSpacing: "-0.35px",
  },
  inputWrapper: {
    width: "100%",
    "& .MuiFormControl-root": {
      "& .Mui-focused": {
        color: theme.palette.text.secondary,
      },
    },
    "& .MuiInputLabel-shrink": {
      transform: "scale(1)",
      background: `${theme.palette.grey[100]} !important`,
      padding: "0 8px 0 0 !important",
    },
    "& .MuiInputBase-input": {
      fontSize: "16px",
      fontWeight: 300,
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
    "& .MuiFormLabel-root.Mui-error": {
      color: theme.palette.text.secondary,
    },
    "& .MuiInput-underline:after": {
      color: theme.palette.text.primary,
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderColor: theme.palette.custom.errorUnderLine,
    },
  },
  errorMessage: {
    display: "flex",
    alignItems: "center",
    color: theme.palette.custom.errorTextColor,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "1.19",
    letterSpacing: "-0.35px",
  },
}));

export default useStyles;
