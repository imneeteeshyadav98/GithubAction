import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  formWrapper: {
    width: "362px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "5.9%",
    "& .MuiInput-input": {
      paddingBottom: "12px",
    },
    "& .MuiTypography-root": {
      marginTop: "-3px",
    },
  },
  inputMargin: {
    marginTop: "24px",
  },
  errorMsg: {
    width: "37.28%",
    marginLeft: "-16px",
    minHeight: "37px",
    whiteSpace: "nowrap",
    "& p": {
      margin: 0,
    },
  },

  headerMsg: {
    width: "95px",
    height:"44px",
    fontSize: "37.9px",
    fontWeight: 500,
    color: "#160c3c",
    marginTop:"220px",
    marginRight:"20%",
  },


  forgotPass: {
    width: "100%",
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "2.19",
    letterSpacing: "-0.35px",
    textAlign: "right",
    textDecoration: "none",
    marginTop: "-46px",
  },
  loginBtnValid: {
    marginTop: "20px",
    width: "100%",
    height: "36px",
    borderRadius: "5px",
  },
  chkBoxBtnwrapper: {
    width: "370px",
    paddingTop: "3.2%",
  },

  footer: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "22.7%",
    paddingBottom: "8.7%",
  },
  footerParagraph: {
    margin: "0 3px 0 0",
    padding: "0 0 14px 0",
    fontWeight: 300,
    fontFamily: theme.typography.fontFamily,
    fontSize: "16px",
  },
  footerLink: {
    marginTop: "5px",
    width: "100%",
    color: theme.palette.primary.main,
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "1",
    letterSpacing: "-0.35px",
    textAlign: "right",
    textDecoration: "none",
    display: "inline",
  },
}));

export default useStyles;
