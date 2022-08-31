import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    // width: "30.33%",
    // margin: "0 1.5%",
    // marginBottom: "24px",
  },
  cardBorder: {
    borderColor: `${theme.palette.grey[500]} !important`,
    minHeight: "336px",
    boxShadow: "none",
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  heading5: {
    color: theme.palette.text.secondary,
    fontSize: "20px",
    fontWeight: 500,
    cursor: "pointer",
    fontFamily: theme.typography.fontFamily,
    maxWidth: "135px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  heading6: {
    color: theme.palette.grey[600],
    fontFamily: theme.typography.fontFamily,
    marginTop: "21px",
    fontSize: "16px",
    fontWeight: 300,
    paddingRight: "0",
    lineHeight: "19px",
  },
  icon: {
    color: theme.palette.grey[600],
    marginRight: "5px",
    display: "flex",
  },
  actionIcons: {
    width: "96px",
    display: "flex",
    justifyContent: "space-between",
    svg: {
      path: {
        fill: theme.palette.grey[50],
      },
    },
  },
  timedesc: {
    color: theme.palette.grey[600],
    fontFamily: theme.typography.fontFamily,
    fontSize: "14px",
    fontWeight: 400,
  },
  timeWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: "33px",
    marginBottom: "28px",
  },

  user: {
    display: "flex",
    marginBottom: "31px",
    alignItems: "center",
    gap: "11px",
  },
  userCount: {
    color: theme.palette.text.secondary,
    fontSize: "16px",
  },
  icon1: {
    color: theme.palette.grey[600],
  },
  icon2: {
    color: theme.palette.grey[600],
  },
  icon3: {
    color: theme.palette.grey[600],
  },
  icon4: {
    color: theme.palette.grey[600],
    cursor: "pointer",
  },
  statusWrap: {
    gap: "16px",
    display: "flex",
  },
  status: {
    backgroundColor: theme.palette.custom.passedBackground,
    color: theme.palette.custom.passedColor,
    fontFamily: theme.typography.fontFamily,
    fontSize: "14px",
    width: "97px",
    height: "22px",
    fontWeight: "normal",
  },
}));

export default useStyles;
