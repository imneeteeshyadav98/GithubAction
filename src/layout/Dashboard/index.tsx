import Header from "./Header";
import SideNav from "./SideNav";
import useStyles from "./style";

const DashboardLayout = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SideNav {...rest} />
      <div className={classes.dashboardBody}>
        <Header />
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
