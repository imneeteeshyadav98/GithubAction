import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import BreadCrumbs from "../BreadCrumbBar";
import useStyles from "./style";
import { RootState } from "redux/reducers";
import { capitalize } from "utils/helper";

const Header = () => {
  const classes = useStyles();
  const currentUser = useSelector((state: RootState) => state.user.username);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            <BreadCrumbs />
          </Typography>
          <Typography variant="h6">Hello, {capitalize(currentUser)}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
