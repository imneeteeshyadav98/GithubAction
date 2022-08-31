import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  forgotPassWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '68vh',
    justifyContent: 'flex-start',
  },
  formWrapper: {
    width: '362px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '11.9%',
    '& .MuiInputBase-input': {
      height: '24px',
    },
  },
  loginBtnValid: {
    // marginTop: "20px",
    marginTop: '96px',
    width: '62.98%',
    height: '36px',
    borderRadius: '5px',
  },
  footer: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '22.7%',
    paddingBottom: '89px',
  },
  footerParagraph: {
    margin: '0 3px 0 0',
    padding: '0 0 14px 0',
    fontWeight: 300,
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
  },
  footerLink: {
    marginTop: '5px',
    width: '100%',
    color: theme.palette.primary.main,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1',
    letterSpacing: '-0.35px',
    textAlign: 'right',
    textDecoration: 'none',
    display: 'inline',
  },
  forgotPassText: {
    width: '44.38%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5.4%',
    '@media (min-width: 1024px) and (min-height: 768px)': {
      marginTop: '10%',
    },
    '@media (min-width: 1366px) and (min-height: 1024px)': {
      marginTop: '4.6%',
    },
  },
  forgotPassTextTop: {
    fontWeight: 500,
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    color: theme.palette.text.secondary,
    lineHeight: '1.15',
    letterSpacing: '-0.32px',
    margin: '0 0 25px 0',
  },
}))

export default useStyles
