import LinkButton from "./LinkButton";
import SimpleButton from "./SimpleButton";

const ButtonTypesMapping = {
  SimpleButton,
  LinkButton,
} as const;

type ButtonTypes = keyof typeof ButtonTypesMapping;

type ButtonOwnProps<T extends ButtonTypes> = {
  as?: T;
};

type ButtonProps<T extends ButtonTypes> = ButtonOwnProps<T> &
  React.ComponentProps<typeof ButtonTypesMapping[T]>;

const defaultButtonType = "SimpleButton";

const Button = <T extends ButtonTypes = typeof defaultButtonType>({
  as,
  ...rest
}: ButtonProps<T>) => {
  const ButtonType =
    ButtonTypesMapping[as] || ButtonTypesMapping[defaultButtonType];

  return <ButtonType {...rest} />;
};

export default Button;
