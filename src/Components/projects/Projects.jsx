import React from "react";
import "./projects.css";
import Data from "./Data";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="project__section container">
      <h2>Projects</h2>
      {Data.map((item) => {
        return <ProjectCard item={item} key={item.id} />;
      })}
    </section>
  );
}

export default Projects;
