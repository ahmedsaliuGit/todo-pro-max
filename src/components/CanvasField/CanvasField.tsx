import classes from "./CanvasField.module.scss";

type CanvasFieldPropsType = {
  label?: string;
  value: string;
};

export const CanvasField = ({ label, value }: CanvasFieldPropsType) => {
  return (
    <>
      {label ? <label htmlFor={label}>{label}</label> : null}
      <canvas className={classes.CanvasField}>{value}</canvas>
    </>
  );
};
