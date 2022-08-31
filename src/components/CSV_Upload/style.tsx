import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  paper: {
    display: "flex",
    width: "435px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    borderRadius: "10px",
  },
  formWrapper: {
    width: "92%",
    padding: "34px 0px 34px 36px",
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(1)",
      background: `${theme.palette.primary.contrastText} !important`,
      padding: "0 8px 0 0 !important",
    },
  },
  closeModal: {
    margin: "10px 12px 0 0",
    width: "32px",
    height: "32px",
    cursor: "pointer",
  },
  modalHeading: {
    marginBottom: "32px",
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: 1.17,
    letterSpacing: "-0.48px",
    color: theme.palette.text.secondary,
  },
  inputMargin: {
    marginBottom: "14px",
  },
  inputSelect: {
    marginBottom: "24px",
    height: "36px",
    "& .MuiInputBase-root": {
      height: "36px",
    },
    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -10px) scale(1)",
      color: theme.palette.text.secondary,
      fontSize: "16px",
      fontWeight: 500,
      fontFamily: theme.typography.fontFamily,
    },
    "& .MuiAutocomplete-inputRoot[class*='MuiOutlinedInput-root'] .MuiAutocomplete-input":
      {
        padding: "0 4px",
      },
  },
  buttonWrapper: {
    marginTop: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelBtn: {
    color: theme.palette.primary.main,
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "1.19",
    letterSpacing: "-0.25px",
    boxShadow: "none",
    minWidth: "auto",
    marginRight: "48px",
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
    },
  },
  loginBtnValid: {
    width: "228px",
    height: "36px",
    borderRadius: "5px",
    backgroundColor: theme.palette.primary.main,
  },
  hide: {
    display: "none",
  },
  uploadBtn: {
    width: "97px",
    marginLeft: "5px",
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    boxShadow: "none",
    border: `1px solid ${theme.palette.primary.main}`,
    fontSize: 50,
    fontFamily: theme.typography.fontFamily,
    fontWeight: "normal",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
      cursor: "pointer",
    },
  },
  uploadWrapper: {
    display: "flex",
    gap: "10px",
  },
  fileName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
