import { ReactNode } from "react";
import classes from "./HeaderLink.module.scss";

interface propTyes {
  url: string;
  children: ReactNode;
}

const HeaderLink = ({ url, children }: propTyes) => {
  return (
    <a href={`${url}`} className={classes.HeaderLink + " mr-2 mr-2"}>
      {children}
    </a>
  );
};

export default HeaderLink;
