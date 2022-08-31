import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme) => ({
  forgotPasswordWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  forgotPassText: {
    width: '44.38%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '1.15',
    letterSpacing: '-0.32px',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '4.6%',
  },
  forgotPassTextTop: {
    marginBottom: '0',
  },
  errorMessage: {
    // marginTop: "1vh",
    height: '37px',
  },
  errorText: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.custom.errorTextColor,
    fontFamily: theme.typography.fontFamily,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1.19',
    letterSpacing: '-0.35px',
  },
  alertIcon: {
    filter:
      'invert(34%) sepia(99%) saturate(3939%) hue-rotate(350deg) brightness(92%) contrast(85%)',
  },
  formWrapper: {
    width: '362px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '9.6%',
    '& .MuiInputBase-input': {
      marginBottom: '12px',
    },
  },
  inputMargin: {
    marginTop: '24px',
  },
  loginBtnValid: {
    marginTop: '3.2%',
    marginBottom: '33.2%',
    width: '62.98%',
    height: '36px',
    borderRadius: '5px',
    backgroundColor: theme.palette.primary.main,
  },
}))

export default useStyles
