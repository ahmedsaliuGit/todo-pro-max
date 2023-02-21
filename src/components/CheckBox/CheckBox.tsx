import { memo } from "react";
import classes from "./CheckBox.module.scss";

type CheckBoxPropsType = {
  label?: boolean;
  labelName?: string;
  value: boolean;
  name?: string;
  onInput?: (value: boolean) => void;
};

export const CheckBox = memo(
  ({ value, name, label, labelName, onInput }: CheckBoxPropsType) => {
    return (
      <div className={classes.CheckBox}>
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={value}
          onChange={(event) => onInput && onInput(event.target.checked)}
        />
        {label ? (
          <label htmlFor={name} className="ml-2">
            {labelName}
          </label>
        ) : null}
      </div>
    );
  }
);
