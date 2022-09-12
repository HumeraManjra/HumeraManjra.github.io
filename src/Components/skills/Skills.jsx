import "./skills.css";
import { skillsIcons } from "../utils/Icons";

function Skills() {
  return (
    <section id="skills" className="container">
      <div className="wrapper">
        <h2 className="heading">SKILLS</h2>
        <article className="skills__container">
          <ul className="skills">
            {skillsIcons.map((icon) => {
              return (
                <li key={icon.id}>
                  <icon.icon className="skill__icon_small" />
                  <p>{icon.title}</p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Skills;
