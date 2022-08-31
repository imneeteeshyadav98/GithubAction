import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
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
  inputMargin: {
    "& .MuiOutlinedInput-multiline": {
      height: "109px",
      padding: "0 14px",
    },
  },
  gitMargin: {
    margin: "36px 0",
    width: "100%",
    "& .MuiSvgIcon-root": {
      width: "13px",
      height: "13px",
    },
  },
  labelWrapper: {
    display: "flex",
    alignItems: "center",
  },
  loginBtnDisabled: {
    marginTop: "35px",
    width: "62.98%",
    height: "36px",
    borderRadius: theme.shape.borderRadius,
  },
  loginBtnValid: {
    marginTop: "3.5%",
    width: "62.98%",
    height: "36px",
    borderRadius: "5px",
  },
}));

export default useStyles;
