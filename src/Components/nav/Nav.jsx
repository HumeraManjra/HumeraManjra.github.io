import React, { useState, useEffect } from "react";
import "./nav.css";
import NavLink from "./NavLink";
import { navIcons } from "../utils/Icons";

function Nav() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const sectionId = section.getAttribute("id");
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              setActiveSection={() => setActiveSection(icon.title)}
              className={activeSection === icon.title ? "active-link" : ""}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
