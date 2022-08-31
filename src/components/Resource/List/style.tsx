import { makeStyles } from "@material-ui/core";
import { margin, marginRight, textAlign } from "styled-system";

const useStyles = makeStyles((theme) => ({
  gridWrapper: {
    "& > .MuiInputBase-root": {
      // width: "88%",
      // height: "60%",
      color: theme.palette.grey[600],
      paddingBottom: 0,
      // overflow: "hidden",
      // textOverflow: "ellipsis",
    },
    "& .warning": {
      color: theme.palette.custom.warningColor,
      borderRadius: "12px",
      backgroundColor: theme.palette.custom.warningBackground,
    },
    "& .pending": {
      color: theme.palette.custom.pendingColor,
      borderRadius: "12px",
      backgroundColor: theme.palette.custom.pendingBackground,
    },
    "& .running": {
      color: theme.palette.custom.runningColor,
      borderRadius: "12px",
      backgroundColor: theme.palette.custom.runningBackground,
    },
    "& .error": {
      color: theme.palette.custom.errorColor,
      borderRadius: "12px",
      backgroundColor: theme.palette.custom.errorBackground,
    },
    "& .aborted": {
      color: theme.palette.custom.abortedColor,
      borderRadius: "12px",
      backgroundColor: theme.palette.custom.abortedBackground,
    },
    "& .passed": {
      color: theme.palette.custom.passedColor,
      borderRadius: "12px",
      backgroundColor: theme.palette.custom.passedBackground,
    },
    "& .MuiDataGrid-columnHeaderTitleContainer": {
      fontSize: "16px",
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: "normal",
      lineHeight: 1.19,
      letterSpacing: "-0.35px",
      "& strong": {
        fontWeight: "normal",
      },
    },
    "& .MuiDataGrid-cell": {
      fontSize: "16px",
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: 300,
      lineHeight: 1.19,
      letterSpacing: "-0.35px",
    },
    "& .MuiDataGrid-root .MuiDataGrid-columnHeaderCheckbox, .MuiDataGrid-root .MuiDataGrid-cellCheckbox":
      {
        "& .MuiSvgIcon-root": {
          width: "14px",
          height: "14px",
        },
      },
  },
  durationTime: {
    display: "flex",
    lineHeight: 0,
    color: theme.palette.custom.durationTime,
    marginTop: "21px",
  },
  statusBtn: {
    width: "97px",
    height: "22px",
  },
  bulkAction: {
    width: "161px",
    height: "36px",
  },
  openPipelineBtn: {
    width: "97px",
    marginLeft: "5px",
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    boxShadow: "none",
    border: `1px solid ${theme.palette.primary.main}`,
    fontSize: "16px",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "normal",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.default,
    },
  },
  newPipelineBtn: {
    width: "228px",
    marginLeft: "5px",
    color: theme.palette.background.default,
    backgroundColor: theme.palette.primary.main,
    fontSize: "16px",
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.custom.newPipelineBtnHover,
    },
  },
  nameCell: {
    textDecoration: "none",
    color: theme.palette.text.secondary,
    cursor: "pointer",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  paraText: {
    fontSize: "16px",
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 300,
    lineHeight: "46px",
  },
  selectWrapper: {
    width: "100%",
    height: "100%",
    "& .MuiSelect-root": {
      paddingBottom: "19px",
    },
    "& .MuiSelect-outlined.MuiSelect-outlined": {
      fontSize: "16px",
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: "normal",
      "& em": {
        fontStyle: "inherit",
      },
    },
  },
  actionDropdown: {
    color: theme.palette.text.secondary,
    fontSize: "16px",
    fontWeight: "normal",
    fontFamily: theme.typography.fontFamily,
    "&.MuiListItem-root.Mui-selected": {
      backgroundColor: theme.palette.grey[100],
    },
  },
  entityButton: {
    width: "229px",
    height: "36px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.19,
    textTransform: "none",
    textDecoration: "none",
    fontFamily: theme.typography.fontFamily,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnWrapper:{
    display:"flex",
    justifyContent:"flex-end",
    marginRight:"22px",
  }
}));

export default useStyles;
