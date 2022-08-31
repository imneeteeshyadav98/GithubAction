import {
  Backdrop,
  Fade,
  Modal as MatModal,
  ModalProps as MatModalProps,
  BackdropProps,
} from "@material-ui/core";
import useStyles from "./style";

type ModalProps = MatModalProps & { backdropsProps?: Partial<BackdropProps> };

const Modal = ({
  open,
  onClose,
  container,
  backdropsProps = {},
  children,
  ...rest
}: ModalProps) => {
  const classes = useStyles();

  return (
    <MatModal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        ...backdropsProps,
      }}
      container={container}
      className={classes.modal}
      {...rest}
    >
      <Fade in={open}>
        <div className={classes.paper}>{children}</div>
      </Fade>
    </MatModal>
  );
};

export default Modal;
