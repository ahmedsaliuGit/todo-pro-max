import { MouseEventHandler, ReactNode } from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
  secondary?: string;
  disable?: string;
  transparent?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  children,
  primary,
  secondary,
  disable,
  transparent,
  onClick,
}: ButtonProps) => {
  const className = [classes.Button];

  if (primary) className.push(classes.Primary);
  if (secondary) className.push(classes.Secondary);
  if (disable) className.push(classes.Disable);
  if (transparent) className.push(classes.Transparent);
  return (
    <button type="button" onClick={onClick} className={className.join(" ")}>
      {children}
    </button>
  );
};
