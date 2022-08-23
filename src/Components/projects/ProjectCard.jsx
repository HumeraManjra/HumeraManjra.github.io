import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { SiReact, SiCss3 } from "react-icons/si";

function ProjectCard({ item }) {
  const { img, heading, Description } = item;
  return (
    <article className="wrapper">
      <div className="article__leftside">
        <img src={img} alt="" />
      </div>
      <div className="article__rightside">
        <h3>{heading}</h3>
        <p>{Description}</p>
        <div className="icons_wrapper">
          <h4>MADE WITH</h4>
          <div className="icons">
            <FaHtml5 className="skill__icon" />
            <SiCss3 className="skill__icon" />
            <SiReact className="skill__icon" />
          </div>
        </div>
        {/* <div className="project__links">
          <a href={URL} target="blank">
            Live Site
          </a>
        </div> */}
      </div>
    </article>
  );
}

export default ProjectCard;
