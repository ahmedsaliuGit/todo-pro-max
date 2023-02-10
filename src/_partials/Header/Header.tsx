import classes from "./Header.module.scss";
import HeaderLink from "./HeaderLink/HeaderLink";

const Header = () => {
  return (
    <header className={classes.Header}>
      <h1 className={classes.HeaderTitle}>Todo Pro Max App</h1>
      <nav className="m-auto">
        <HeaderLink url="home">Home</HeaderLink>
        <HeaderLink url="home">Stats</HeaderLink>
        <HeaderLink url="home">About</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
