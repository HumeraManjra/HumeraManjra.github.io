import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiHackerrank } from "react-icons/si";

function SocialFollow() {
  return (
    <>
      <ul className="about-social-follow">
        <li>
          <a href="https://linkedin.com/in/humeramanjra" target="_blank">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/HumeraManjra" target="_blank">
            <BsGithub />
          </a>
        </li>
        {/* <li>
          <a href="https://www.hackerrank.com/humeramanjra" target="_blank">
            <SiHackerrank />
          </a>
        </li> */}
      </ul>
    </>
  );
}

export default SocialFollow;
