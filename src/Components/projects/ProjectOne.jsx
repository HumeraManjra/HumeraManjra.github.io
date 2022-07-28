import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import macbook from "../../assets/macbook.jpg";
import "./projects.css";
import "animate.css";

function ProjectOne() {
  return (
    <article className="wrapper">
      <div className="article__leftside">
        <img src={macbook} alt="" />
      </div>
      <div className="article__rightside">
        <h3>SajjBoutique</h3>
        <p>
          SajjBoutique is a responsive e-commerce web application for a local
          clothing store
        </p>
        <div className="icons_wrapper">
          <h4>MADE WITH</h4>
          <div className="icons">
            <FaHtml5 className="skill__icon" />
            <i className="devicon-sass-original"></i>
            <SiJavascript className="skill__icon" />
          </div>
        </div>
        <div className="project__links">
          <a href="https://sajjboutique.ca/" target="blank">
            Live Site
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectOne;
