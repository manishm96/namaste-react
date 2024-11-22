import { LOGO_URL } from "../utils/utils";
import { useState } from "react";

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
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
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
