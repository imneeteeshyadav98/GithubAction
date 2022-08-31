import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import clsx from "clsx";
import { Link } from "react-router-dom";
import useStyles from "./style";

const NavDrawer = ({
  drawerWidth,
  open,
  toggleDrawer,
  items,
  selectedItemIdx,
  onSelectedItemClick,
  customPaperClass = {},
  customDrawerClass = {},
  isToolBar = false,
  occupyToolbarSpace = true,
}) => {
  const classes = useStyles({ drawerWidth });

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
          ...customPaperClass,
        }),
        paperAnchorDockedLeft: classes.drawerPosition,
        ...customDrawerClass,
      }}
    >
      {isToolBar && (
        <Toolbar className={open ? classes.logoWrap : classes.SmallLogoWrap}>
          <div className={classes.logoHeader}>
          <img
            src={
              open ? "/images/loricaLogo.png" : "/icons/logomark.svg"
            }
            className={open ? classes.logo : classes.logoSmall}
            alt="app logo"
          />
          </div>
        </Toolbar>
      )}
      {!isToolBar && occupyToolbarSpace && (
        <Toolbar
          className={open ? classes.logoBlankWrap : classes.SmallLogoBlankWrap}
        ></Toolbar>
      )}
      <List>
        {items.map((item, idx) => (
          <ListItem
            button
            key={item.label}
            selected={selectedItemIdx === idx}
            onClick={() => onSelectedItemClick(idx)}
            className={classes.menuList}
            component={Link}
            to={item.path}
          >
            <ListItemIcon>
              <img src={item.labelLogo} alt={item.name} />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      {/* <div className={classes.toolbar}>
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div> */}
    </Drawer>
  );
};

export default NavDrawer;
