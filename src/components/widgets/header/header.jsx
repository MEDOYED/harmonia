import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <>
      <nav className="header__nav">
        <Link className="header__link" to={"/"}>
          Home
        </Link>
        <Link className="header__link" to={"/profile"}>
          Profile
        </Link>
        <Link className="header__link" to={"/report"}>
          Report
        </Link>
        <Link className="header__link" to={"/signup"}>
          Sign Up
        </Link>
      </nav>
    </>
  );
};

export default Header;
