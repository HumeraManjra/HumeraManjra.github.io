import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.png";
import SocialLinks from "../utils/SocialLinks";
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
        <aside>
          <NavHashLink to={"/#about"} className="scroll__down">
            Scroll Down
          </NavHashLink>
        </aside>
        <aside className="header__social">
          <SocialLinks />
        </aside>
      </div>
    </header>
  );
}

export default Header;
