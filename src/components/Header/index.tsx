import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="wrapper__header">
      <NavLink className="header__logo" to="/">
        POC BOT BUILDER
      </NavLink>
    </header>
  );
};

export default Header;
