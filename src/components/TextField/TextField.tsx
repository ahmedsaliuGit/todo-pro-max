import classes from "./TextField.module.scss";

interface TextFieldProps {
  onInput: (value: string) => void;
  value: string;
}

export const TextField = ({ onInput, value }: TextFieldProps) => (
  <input
    type="text"
    value={value}
    onChange={(event) => onInput(event.target.value)}
    className={classes.TextField}
  />
);
