import classes from "./CanvasField.module.scss";

type CanvasFieldPropsType = {
  label?: string;
};

export const CanvasField = ({ label }: CanvasFieldPropsType) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <canvas className={classes.CanvasField}></canvas>
    </>
  );
};
