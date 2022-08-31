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
      transform: "translate(14px, -11px) scale(1)",
      background: `${theme.palette.grey[100]} !important`,
      padding: "0 8px 0 0 !important",
    },
    "& .MuiInputBase-input": {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "2.6 !important",
      letterSpacing: "-0.35px",
      color: theme.palette.text.secondary,
      padding: "0 14px",
    },
    "& .MuiInput-underline:after": {
      color: theme.palette.primary.main,
    },
    "& .MuiFormLabel-root.Mui-error": {
      color: theme.palette.text.secondary,
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderColor: theme.palette.custom.errorUnderLine,
    },
  },
}));

export default useStyles;
