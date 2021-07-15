import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const Header = () => {
  return (
    <header className="header__wrapper">
      <NavLink className="header__logo" to="/">
        POC BOT BUILDER
      </NavLink>
    </header>
  );
};

export default Header;
