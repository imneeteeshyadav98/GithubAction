import { Button as MatButton } from "@material-ui/core";
import React, { ComponentProps } from "react";

type SimpleButtonProps = ComponentProps<typeof MatButton> & {
  label: string;
  classes?: string;
};

const SimpleButton = ({
  label,
  classes,
  variant = "contained",
  color = "primary",
  ...rest
}: SimpleButtonProps) => {
  return (
    <MatButton className={classes} variant={variant} color={color} {...rest}>
      {label}
    </MatButton>
  );
};

export default SimpleButton;
