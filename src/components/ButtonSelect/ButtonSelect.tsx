import { Button } from "../Button/Button";
import classes from "./ButtonSelect.module.scss";

type ButtonSelectOptionsProps = {
  label: string;
  value: string;
};

type ButtonSelectPropsType = {
  options: ButtonSelectOptionsProps[];
  onInput: (value: string) => void;
  value: string;
};

export const ButtonSelect = ({
  value,
  options,
  onInput,
}: ButtonSelectPropsType) => {
  return (
    <div className={classes.ButtonSelectWrapper}>
      {options.map((option) => (
        <Button
          className={`${classes.ButtonSelectOption} ${
            option.value === value && classes.Selected
          }`}
          key={option.value}
          onClick={() => onInput(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
