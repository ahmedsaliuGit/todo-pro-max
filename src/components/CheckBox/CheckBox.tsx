import classes from "./CheckBox.module.scss";

type CheckBoxPropsType = {
  label?: boolean;
  labelName?: string;
  value: boolean;
  name?: string;
};

export const CheckBox = ({
  value,
  name,
  label,
  labelName,
}: CheckBoxPropsType) => {
  return (
    <div className={classes.CheckBox}>
      <input type="checkbox" name={name} id={name} checked={value} />
      {label ? (
        <label htmlFor={name} className="ml-2">
          {labelName}
        </label>
      ) : null}
    </div>
  );
};
