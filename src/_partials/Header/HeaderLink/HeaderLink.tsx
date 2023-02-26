import { ReactNode } from "react";
import { Link } from "react-router-dom";
import classes from "./HeaderLink.module.scss";

interface propTyes {
  url: string;
  children: ReactNode;
}

const HeaderLink = ({ url, children }: propTyes) => {
  return (
    <Link to={`${url}`} className={classes.HeaderLink + " mr-2 mr-2"}>
      {children}
    </Link>
  );
};

export default HeaderLink;
