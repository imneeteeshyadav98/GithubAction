import { Button } from "components/FormComponents";
import useStyles from "./style";

const ConfirmationModal = ({handleOpenModal,confirm,heading}) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.formWrapper}>
        <div>{heading}</div>
        <div className={classes.buttonWrapper}>
          <Button
            label="Cancel"
            onClick={handleOpenModal}
            className={classes.cancelBtn}
          />
          <Button
            label="Yes"
            type="submit"
            className={classes.loginBtnValid}
            onClick={confirm}
          />
        </div>
      </div>
      <div className={classes.closeModal}>
        <img
          src="/icons/icon-cancel.svg"
          alt="closeModal"
          onClick={handleOpenModal}
        />
      </div>
    </div>
  );
};

export default ConfirmationModal;
