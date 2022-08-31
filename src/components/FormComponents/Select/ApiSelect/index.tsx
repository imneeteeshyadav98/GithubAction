import { ErrorMessage } from "@hookform/error-message";
import {
  MenuItem,
  TextField,
  TextFieldProps,
  SelectProps,
  CircularProgress,
} from "@material-ui/core";
import ErrorComponent from "components/FormComponents/Error";
import fetcher from "dataProvider";
import { useCallback, useEffect, useState } from "react";
import {
  Controller,
  FieldErrors,
  UseControllerProps,
  FieldValues,
} from "react-hook-form";
import { useQuery } from "react-query";
import useStyles from "./style";

type ApiSelectProps = FieldValues &
  UseControllerProps &
  TextFieldProps &
  SelectProps & {
    errors?: FieldErrors;
    resourceName: string;
    customUrl?: string;
    inputLabelProps?: any;
    selectProps?: any;
  };

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;

const ApiSelect = ({
  name,
  control,
  label,
  resourceName,
  customUrl,
  fullWidth = true,
  errors,
  multiple = false,
  variant = "outlined",
  inputLabelProps = {},
  selectProps = {},
  placeholder,
  ...rest
}: ApiSelectProps) => {
  const classes = useStyles();

  const [optionData, setOptionData] = useState([]);
  const [offset, setOffset] = useState(0);

  const { isLoading, data } = useQuery(
    [resourceName, offset],
    () =>
      fetcher.get(
        customUrl || `/api/v1/${resourceName}?limit=2&offset=${offset}`
      )
    // fetcher.get(
    //   customUrl ||
    //     `https://pokeapi.co/api/v2/pokemon?limit=500&offset=${offset}`
    // )
  );

  useEffect(() => {
    if (!isLoading) {
      setOptionData((prevData) => [...prevData, ...data?.data?.data]);
    }
  }, [data, isLoading]);

  const renderOptions = optionData?.map((opt) => ({
    label: opt?.name,
    value: opt?.name,
  }));

  const renderValue = (value) => {
    const findLabel = (val) =>
      renderOptions?.find((option) => option?.value === val);

    if (multiple && !!value.length) {
      return value?.map((val) => findLabel(val).label).join(",");
    } else if (value && !!value.length) {
      return findLabel(value)?.label;
    } else {
      return placeholder || "Select";
    }
  };

  const onScroll = useCallback(
    (event) => {
      if (
        Math.abs(
          event.target.scrollHeight -
            event.target.clientHeight -
            event.target.scrollTop
        ) < 1 &&
        data?.data?.count >= offset
      )
        setOffset((prevOffset) => prevOffset + 10);
    },
    [data?.data?.count, offset]
  );

  return (
    <div className={classes.inputWrapper}>
      <Controller
        render={({ field }) => (
          <TextField
            select
            error={!!errors[name]}
            variant={variant}
            fullWidth={fullWidth}
            label={label}
            value={field.value}
            onChange={field.onChange}
            inputRef={field.ref}
            InputLabelProps={{
              classes: { root: classes.inputLabel },
              shrink: true,
              ...inputLabelProps,
            }}
            SelectProps={{
              labelWidth: 100,
              displayEmpty: true,
              renderValue,
              multiple,
              MenuProps: {
                PaperProps: {
                  onScroll,
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250,
                  },
                },
              },
              ...selectProps,
            }}
            {...rest}
          >
            {renderOptions?.map((option, idx) =>
              renderOptions.length - 1 === idx ? (
                <>
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                  {isLoading && <CircularProgress />}
                </>
              ) : (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )
            )}
          </TextField>
        )}
        name={name}
        control={control}
        {...rest}
      />
      {errors && (
        <ErrorMessage
          name={name}
          errors={errors}
          render={(errorObj) => <ErrorComponent message={errorObj.message} />}
        />
      )}
    </div>
  );
};

export default ApiSelect;
