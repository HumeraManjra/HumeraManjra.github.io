import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

function SocialFollow() {
    return (
        <>
          <ul className="about-social-follow">
            <li>
              <a href="https://www.linkedin.com/in/ibrahimmanjra/">
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ibrahimmanjra/">
                <BsGithub />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ibrahimmanjra/">
                <SiHackerrank />
              </a>
            </li>
          </ul>
        </>
      );
}

export default SocialFollow;