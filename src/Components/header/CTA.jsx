import React from "react";
import Resume from "../../assets/Resume.docx";
import { NavHashLink } from "react-router-hash-link";
import "animate.css";

function CTA() {
  return (
    <aside className="cta">
      <a
        href={Resume}
        download
        className="btn animate__animated animate__flash animate__slower animate__repeat-2"
      >
        Download Resume
      </a>
      <NavHashLink to={"/#contact"} className="btn btn-primary">
        Contact
      </NavHashLink>
    </aside>
  );
}

export default CTA;
