import React from "react";

function ProjectCard({ item }) {
  const { img, heading, Description, Icons } = item;
  return (
    <article className="project__wrapper">
      <div className="article__leftside">
        <img src={img} alt="" />
      </div>
      <div className="article__rightside">
        <h3>{heading}</h3>
        <p>{Description}</p>
        <div className="icons_wrapper">
          <h4>MADE WITH</h4>
          <div className="icons">
            {Icons.map((Icon, index) => {
              return (
                <ul>
                  <li>{Icon}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
