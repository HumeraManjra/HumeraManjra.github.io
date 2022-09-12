import React, { useState } from "react";
import "./nav.css";
import NavLink from "./NavLink";
import { navIcons } from "../utils/Icons";

function Nav() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav>
      <ul className="navmenu">
        {navIcons.map((icon) => {
          return (
            <NavLink
              path={icon.path}
              key={icon.id}
              navIcon={<icon.icon />}
              heading={icon.title}
              setActiveLink={() => setActiveLink(icon.title)}
              className={activeLink === icon.title ? "active-link" : ""}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
