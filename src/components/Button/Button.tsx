import { memo, MouseEventHandler, ReactNode } from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  disable?: boolean;
  transparent?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  className?: string;
};

export const Button = memo(
  ({
    children,
    primary,
    secondary,
    disable,
    transparent,
    onClick,
    type,
    className = "",
  }: ButtonProps) => {
    const classNames = [classes.Button, className];

    if (primary) classNames.push(classes.Primary);
    if (secondary) classNames.push(classes.Secondary);
    if (disable) classNames.push(classes.Disable);
    if (transparent) classNames.push(classes.Transparent);
    return (
      <button type={type} onClick={onClick} className={classNames.join(" ")}>
        {children}
      </button>
    );
  }
);
