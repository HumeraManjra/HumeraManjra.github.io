import React from "react";
import Resume from "../../assets/Resume.pdf";
import { NavHashLink } from "react-router-hash-link";
import "animate.css";

function CTA() {
  return (
    <article className="cta">
      <a
        href={Resume}
        download
        className="resumebtn btn animate__animated animate__flash animate__slower animate__repeat-2"
      >
        Download Resume
      </a>
      <NavHashLink to={"/#contact"} className="btn btn-primary">
        Contact
      </NavHashLink>
    </article>
  );
}

export default CTA;
