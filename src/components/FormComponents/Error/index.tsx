import useStyles from "./style";

const ErrorComponent = ({ message }) => {
  const classes = useStyles();

  return (
    <>
      {message && (
        <div className={classes.errorMessage}>
          <img
            src="/icons/icon-alert.svg"
            alt="alertIcon"
            className={classes.alertIcon}
          />
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default ErrorComponent;
