import React from "react";
import { NavLink } from "react-router-dom";
import LogoFooter from "./LogoFooter";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer--Center">
        <NavLink to="/">
          <LogoFooter />
        </NavLink>
        <p className="Footer--Text">2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
