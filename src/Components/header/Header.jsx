import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";
import { NavHashLink } from "react-router-hash-link";

function Header() {
  return (
    <header id="home">
      <div className="header__container">
        <article className="intro">
          <h5>Hello, I'm</h5>
          <h1>Humera Manjra</h1>
          <h5>Front-End Developer</h5>
        </article>
        <CTA />
        <article>
          <img src={me} alt="" className="me" />
        </article>
        <NavHashLink to={"/#about"} className="scroll__down">
          Scroll Down
        </NavHashLink>
        <HeaderSocial />
      </div>
    </header>
  );
}

export default Header;
