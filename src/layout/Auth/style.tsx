import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  layoutWrapper: {
    display: "flex",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  banner: {
    width: (showBanner) => (showBanner ? "44.9%" : ""),
    minHeight: "100vh",
  },
  layoutBody: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: (showBanner) => (showBanner ? "55.1%" : "100%"),
    height: "100vh",
    // padding: '7% 3% 3%',
    // paddingTop: "17.8%",
    // overflowY: "auto",
  },
}));

export default useStyles;
