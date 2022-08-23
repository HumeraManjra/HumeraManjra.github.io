import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { VscTools } from "react-icons/vsc";
import { BiTask } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { NavHashLink } from "react-router-hash-link";
import LinkCard from "./LinkCard";

function Nav() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav>
      <ul className="navmenu">
        <li className="nav__link__wrapper">
          <NavHashLink
            to={"/#"}
            onClick={() => setActiveLink("home")}
            className={activeLink === "home" ? "active-link" : ""}
          >
            <AiOutlineHome />
          </NavHashLink>
          <p className="nav__label">Home</p>
        </li>
        <li
          className="nav__link__wrapper"
          onClick={() => setActiveLink("about")}
        >
          <NavHashLink
            to={"/#about"}
            className={activeLink === "about" ? "active-link" : ""}
          >
            <ImUser />
          </NavHashLink>
          <p className="nav__label">About</p>
        </li>
        <li
          className="nav__link__wrapper"
          onClick={() => setActiveLink("skills")}
        >
          <NavHashLink
            to={"/#skills"}
            className={activeLink === "skills" ? "active-link" : ""}
          >
            <VscTools />
          </NavHashLink>
          <p className="nav__label">Skills</p>
        </li>
        <li
          className="nav__link__wrapper"
          onClick={() => setActiveLink("projects")}
        >
          <NavHashLink
            to={"/#projects"}
            className={activeLink === "projects" ? "active-link" : ""}
          >
            <BiTask />
          </NavHashLink>
          <p className="nav__label">Projects</p>
        </li>
        <li
          className="nav__link__wrapper"
          onClick={() => setActiveLink("contact")}
        >
          <NavHashLink
            to={"/#contact"}
            className={activeLink === "contact" ? "active-link" : ""}
          >
            <MdEmail />
          </NavHashLink>
          <p className="nav__label">Contact</p>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
