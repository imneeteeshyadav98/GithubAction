import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) => ({
  dataGridWrapper: {
    height: 300,
    width: "100%",
    "& .MuiDataGrid-root": {
      border: "none",
      color: theme.palette.text.secondary,
    },
    "& .MuiDataGrid-columnHeader:focus": {
      outline: "none",
    },
    "& .MuiDataGrid-cell": {
      borderBottom: `1px solid ${theme.palette.custom.cellBorder}`,
      "&:focus,&:focus-within": {
        outline: "none",
      },
    },
    "& .MuiDataGrid-columnsContainer": {
      borderBottom: `solid 1px ${theme.palette.custom.columnBorder}`,
    },
  },
  noRows: {
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.38)",
  },
}));

export default useStyles;
