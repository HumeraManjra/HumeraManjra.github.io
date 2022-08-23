import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { BsArrowUpCircleFill } from "react-icons/bs";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <article className="back_to_top_link">
        <NavHashLink to={"/#"}>
          <BsArrowUpCircleFill className="animate__animated animate__pulse animate__infinite	infinite" />
        </NavHashLink>
      </article>
      <article>
        <p>Designed by Humera Manjra</p>
      </article>
    </footer>
  );
}

export default Footer;
