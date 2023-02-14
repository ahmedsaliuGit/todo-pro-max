import { MouseEventHandler, ReactNode } from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  disable?: boolean;
  transparent?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
};

export const Button = ({
  children,
  primary,
  secondary,
  disable,
  transparent,
  onClick,
  type,
}: ButtonProps) => {
  const className = [classes.Button];

  if (primary) className.push(classes.Primary);
  if (secondary) className.push(classes.Secondary);
  if (disable) className.push(classes.Disable);
  if (transparent) className.push(classes.Transparent);
  return (
    <button type={type} onClick={onClick} className={className.join(" ")}>
      {children}
    </button>
  );
};
