import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  avatarImgWrap: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  ".MuiIconButton-root": {
    "&:hover": {
      backgroundColor: theme.palette.custom.avatarMenuItemHover,
    },
  },
}));

export default useStyles;
