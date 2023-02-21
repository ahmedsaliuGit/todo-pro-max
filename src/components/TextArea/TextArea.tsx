import { memo } from "react";
import classes from "./TextArea.module.scss";

type TextAreaPropsType = {
  value: string;
  label?: string;
  name?: string;
  placeholder?: string;
  onInput: (value: string) => void;
};

export const TextArea = memo(
  ({ value, label, name, placeholder, onInput }: TextAreaPropsType) => {
    return (
      <>
        {label ? <label htmlFor={name}>{label}</label> : null}
        <textarea
          className={classes.TextArea}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(event) => {
            const { value } = event.target;
            onInput(value);
          }}
        ></textarea>
      </>
    );
  }
);
