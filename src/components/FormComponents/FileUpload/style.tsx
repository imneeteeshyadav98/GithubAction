import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      color: "#3F51B5",
      fontWeight: 500,
    },
    chip: {
      marginTop: "5px",
    },
    btn: {
      margin: "5px 0px",
    },
    input: {
      display: "none",
    },
  }),
);

export default useStyles;
