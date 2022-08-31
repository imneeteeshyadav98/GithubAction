import { makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles<Theme>((theme) => ({
  inputLabel: {
    color: theme.palette.text.secondary,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '1.19',
    letterSpacing: '-0.35px',
  },
  inputWrapper: {
    width: '100%',
    '& .MuiFormControl-root': {
      '& .Mui-focused': {
        color: theme.palette.text.secondary,
      },
    },
    '& .MuiInput-formControl': {},
    '& .MuiInputLabel-shrink': {
      transform: 'scale(1)',
    },
    '& .MuiInputBase-input': {
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: '1.19',
      letterSpacing: '-0.35px',
      color: theme.palette.text.secondary,
    },
    '& .MuiInput-underline:after': {
      color: theme.palette.primary.main,
    },
  },
  tooltip: {
    backgroundColor: theme.palette.grey[200],
    borderRadius: '2px',
    boxShadow: '0 3px 9px -1px rgba(20, 20, 20, 0.05)',
    border: `solid 1px ${theme.palette.grey[500]}`,
  },
  tooltipArrow: {
    color: theme.palette.grey[200],
    borderLeft: `solid 1px ${theme.palette.grey[500]}`,
    borderBottom: `solid 1px ${theme.palette.grey[500]}`,
    transform: 'rotateY(0deg) rotate(45deg)',
  },
}))

export default useStyles
