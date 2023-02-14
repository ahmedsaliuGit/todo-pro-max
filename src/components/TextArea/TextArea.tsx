import classes from "./TextArea.module.scss";

type TextAreaPropsType = {
  value: string;
  label?: string;
  name?: string;
};

export const TextArea = ({ value, label, name }: TextAreaPropsType) => {
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <textarea
        className={classes.TextArea}
        name={name}
        value={value}
      ></textarea>
    </>
  );
};
