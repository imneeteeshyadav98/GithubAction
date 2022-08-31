import useStyles from "./style";

const SideBanner = () => {
  const classes = useStyles();

  return (
    <div className={classes.sideBanner}>
      <img
        src="/images/login-logo.png"
        alt="companyLogo"
      />
    </div>
  );
};

export default SideBanner;
