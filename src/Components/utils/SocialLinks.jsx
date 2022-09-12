import { BsLinkedin, BsGithub } from "react-icons/bs";

function SocialLinks() {
  return (
    <>
      <li>
        <a
          href="https://linkedin.com/in/humeramanjra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/HumeraManjra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </li>
    </>
  );
}

export default SocialLinks;
