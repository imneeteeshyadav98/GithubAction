import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  forgotPassWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  forgotPassText: {
    marginTop: '5.4%',
    marginBottom: '3.1%',
    width: '44.38%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
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
  codeTimer: {
    fontSize: '16px',
    fontWeight: 300,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.secondary,
    '& span': {
      fontWeight: 500,
    },
  },
  formWrapper: {
    width: '37.28%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '6.3%',
  },
  loginBtnValid: {
    marginTop: '47px',
    width: '62.98%',
    height: '36px',
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.main,
  },
  footer: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '9.4%',
    marginBottom: '31.3%',
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
}))

export default useStyles
