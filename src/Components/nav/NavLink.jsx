import React from "react";
import { NavHashLink } from "react-router-hash-link";

function NavLink({ path, setActiveSection, className, navIcon, heading }) {
  return (
    <li className="nav__link__wrapper">
      <NavHashLink to={path} onClick={setActiveSection} className={className}>
        {navIcon}
      </NavHashLink>
      <p className="nav__label">{heading}</p>
    </li>
  );
}

export default NavLink;
