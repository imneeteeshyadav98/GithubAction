import { createStyles, makeStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
      // flexShrink: 0,
      // whiteSpace: "nowrap",
    },
    logoWrap: {
      padding: "43px 0 76px 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "46px",
      "& img": {
        width: "158px",
        height: "158px",
        // margin: "50px 51px 36px 50px",
        // backgroundColor: "#174ca1",
      },
    },
    logoBlankWrap: {
      padding: "91px 0 78px 0",
      display: "flex",
      justifyContent: "center",
    },
    SmallLogoWrap: {
      padding: "26px 0 92px 0",
      display: "flex",
      justifyContent: "center",
    },
    SmallLogoBlankWrap: {
      padding: "83px 0 78px 0",
      display: "flex",
      justifyContent: "center",
    },
    logo: {},
    logoSmall: {},
    drawerOpen: {
      width: (props) => +props["drawerWidth"],
      position: "relative",
      height: "100vh",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // backgroundColor: theme.palette.grey[300],
      backgroundColor:"#e8e7ec",
    },

    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: theme.palette.grey[300],
      position: "relative",
      height: "100vh",
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      position: "absolute",
      right: 0,
      bottom: 0,
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    drawerPosition: {
      left: "auto",
    },
    menuList: {
      color: theme.palette.grey[600],
      fontSize: "16px",
      fontWeight: "normal",
      fontFamily: theme.typography.fontFamily,
      "&.Mui-selected": {
        backgroundColor: theme.palette.grey[100],
        borderRight: "3px solid #fcb733",
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        "& .MuiTypography-root": {
          fontSize: "16px",
          fontWeight: "900",
          fontFamily: theme.typography.fontFamily,
        },
      },
    },
    logoHeader: {
      display:"flex",
      justifyContent:"center",
    }
  })
);

export default useStyles;
