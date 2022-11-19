import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="navigation--center">
      <div className="navigation">
        <NavLink className="logoLink" to="/">
          <Logo />
        </NavLink>
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
