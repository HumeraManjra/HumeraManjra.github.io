import React from "react";
import { NavHashLink } from "react-router-hash-link";

function NavLink({ path, setActiveLink, className, navIcon, heading }) {
  return (
    <li className="nav__link__wrapper">
      <NavHashLink to={path} onClick={setActiveLink} className={className}>
        {navIcon}
      </NavHashLink>
      <p className="nav__label">{heading}</p>
    </li>
  );
}

export default NavLink;
