import { forwardRef } from "react";
import classes from "./TextField.module.scss";

interface TextFieldProps {
  onInput: (value: string) => void;
  value: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ onInput, value }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(event) => onInput(event.target.value)}
        className={classes.TextField}
      />
    );
  }
);
