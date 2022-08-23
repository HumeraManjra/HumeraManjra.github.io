import React from "react";
import { NavHashLink } from "react-router-hash-link";

function LinkCard({ path, setActiveLink, activeLink, icon, heading }) {
  return (
    <li className="nav__link__wrapper">
      <NavHashLink
        to={path}
        onClick={setActiveLink}
        className={activeLink === { activeLink } ? "active-link" : ""}
      >
        <div>{icon}</div>
      </NavHashLink>
      <p className="nav__label">{heading}</p>
    </li>
  );
}

export default LinkCard;
