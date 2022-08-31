import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme) => ({
  validationWrapper: {
    padding: '11px 30px 10px',
  },
  errorLabel: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1.19',
    letterSpacing: '-0.35px',
    color: theme.palette.text.secondary,
  },
  keys: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[600],
    fontSize: '16px',
    lineHeight: '1.19',
    letterSpacing: '-0.35px',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'normal',
  },
  keysTrue: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.custom.keysTrue,
    fontSize: '16px',
    lineHeight: '1.19',
    letterSpacing: '-0.35px',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'normal',
  },
  keyLabel: {
    marginLeft: '5px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  iconTrue: {
    width: '24px',
    height: '24px',
    filter:
      'invert(53%) sepia(76%) saturate(454%) hue-rotate(59deg) brightness(96%) contrast(88%)',
  },
}))

export default useStyles
