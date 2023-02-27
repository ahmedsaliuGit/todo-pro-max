import { ReactNode } from "react";
import classes from "./PageLayout.module.scss";

export const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className={classes.TodoList + " mr-auto ml-auto"}>{children}</div>
);
