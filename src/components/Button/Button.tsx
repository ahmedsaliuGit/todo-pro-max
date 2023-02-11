import { ReactNode } from "react";
import classes from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  primary?: boolean;
  secondary?: string;
  disable?: string;
  transparent?: string;
};

export const Button = ({
  children,
  primary,
  secondary,
  disable,
  transparent,
}: ButtonProps) => {
  const className = [classes.Button];

  if (primary) className.push(classes.Primary);
  if (secondary) className.push(classes.Secondary);
  if (disable) className.push(classes.Disable);
  if (transparent) className.push(classes.Transparent);
  return <button className={className.join(" ")}>{children}</button>;
};
