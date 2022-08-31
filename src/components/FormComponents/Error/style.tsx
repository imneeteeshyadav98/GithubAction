import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme) => ({
  errorMessage: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.custom.errorTextColor,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1.19',
    letterSpacing: '-0.35px',
  },
  alertIcon: {
    filter:
      'invert(34%) sepia(99%) saturate(3939%) hue-rotate(350deg) brightness(92%) contrast(85%)',
  },
}))

export default useStyles
