import ApiSelect from "./ApiSelect";
import OptionSelect from "./OptionSelect";

const SelectTypesMapping = {
  ApiSelect,
  OptionSelect,
} as const;

type SelectTypes = keyof typeof SelectTypesMapping;

type SelectOwnProps<T extends SelectTypes> = {
  as?: T;
};

type SelectProps<T extends SelectTypes> = SelectOwnProps<T> &
  React.ComponentProps<typeof SelectTypesMapping[T]>;

const defaultSelectType = "OptionSelect";

const Select = <T extends SelectTypes = typeof defaultSelectType>({
  as,
  ...rest
}: SelectProps<T>) => {
  const SelectType =
    SelectTypesMapping[as] || SelectTypesMapping[defaultSelectType];

  return <SelectType {...rest} />;
};

export default Select;
