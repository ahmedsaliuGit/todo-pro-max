import { forwardRef } from "react";
import classes from "./TextField.module.scss";

interface TextFieldProps {
  onInput: (value: string) => void;
  value: string;
  label?: boolean;
  name?: string;
  labelName?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ onInput, value, label, name, labelName }, ref) => {
    return (
      <>
        {label ? <label htmlFor={name}>{labelName}</label> : null}
        <input
          ref={ref}
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={(event) => onInput(event.target.value)}
          className={classes.TextField}
        />
      </>
    );
  }
);
