import React from "react";
import "./about.css";
import SocialFollow from "./SocialFollow";

function About() {
  return (
    <section id="about" className="section_center container">
      <h2>ABOUT ME</h2>
      <article className="about__container">
        <p>
          Hello World! I'm Humera Manjra, a Front-End Web Developer with
          experience in designing and developing responsive, accessible,
          user-friendly web applications using React, JavaScript, HTML, and CSS.
        </p>
      </article>
      <article>
        <SocialFollow />
      </article>
    </section>
  );
}

export default About;
