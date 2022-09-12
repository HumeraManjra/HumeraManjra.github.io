import React from "react";
import "./about.css";
import SocialLinks from "../utils/SocialLinks";

function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h2>ABOUT ME</h2>
        <article className="about__container">
          <p>
            Hello World! I'm Humera Manjra, a Front-End Web Developer with
            experience in designing and developing responsive, accessible,
            user-friendly web applications using React, JavaScript, HTML, and
            CSS.
          </p>
        </article>
        <article>
          <ul className="about-social-follow">
            <SocialLinks />
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;
