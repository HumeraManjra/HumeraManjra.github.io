import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

function HeaderSocial() {
  return (
    <aside className="header__social">
      <a href="https://linkedin.com/in/humeramanjra" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/HumeraManjra" target="_blank">
        <BsGithub />
      </a>
    </aside>
  );
}

export default HeaderSocial;
