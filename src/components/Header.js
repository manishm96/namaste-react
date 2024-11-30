import { LOGO_URL } from "../utils/utils";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("Header component rendered");
  const [login, setLogin] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo-image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() =>
                login != "login" ? setLogin("login") : setLogin("logout")
              }
            >
              {login}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
