import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  otpField: {
    width: '36px',
    border: 'none',
    borderBottom: `2px solid ${theme.palette.text.secondary}`,
    fontSize: '32px',
    fontWeight: 900,
    lineHeight: '1.16',
    letterSpacing: '-0.98px',
    color: theme.palette.text.secondary,
    marginRight: '9px',
    '&:focus-visible': {
      outline: 'none',
    },
  },
}))

export default useStyles
