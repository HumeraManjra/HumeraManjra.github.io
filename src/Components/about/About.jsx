import React from "react";
import "./about.css";
import SocialFollow from "./SocialFollow";

function About() {
  return (
    <section id="about" className="about__section container">
      <h2>ABOUT ME</h2>
      <article className="container about__container">
        <p>
          Hello World! I'm Humera Manjra, a Front-End Web Developer with
          experience in designing and developing responsive, accessible,
          user-friendly web applications using React, JavaScript, HTML, and CSS.
        </p>
        <p>
          I'm excited to make the leap and continue refining my skills with the
          right company. Let's get in touch!!
        </p>
        <SocialFollow />
      </article>
    </section>
  );
}

export default About;
