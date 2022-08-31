import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import SimpleButton from "../SimpleButton";

type LinkButtonProps = ComponentProps<typeof Link> &
  ComponentProps<typeof SimpleButton>;

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link {...props}>
      <SimpleButton {...props} />
    </Link>
  );
};

export default LinkButton;
