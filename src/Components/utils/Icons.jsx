import { VscTools } from "react-icons/vsc";
import { BiHome, BiUser, BiTask, BiMailSend } from "react-icons/bi";
import { FaUniversalAccess } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { MdOutlineSettingsEthernet } from "react-icons/md";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiMysql,
  DiResponsive,
  DiSass,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";

export let navIcons = [
  {
    id: "icon001",
    icon: BiHome,
    title: "home",
    path: "/#",
  },
  {
    id: "icon002",
    icon: BiUser,
    title: "about",
    path: "/#about",
  },
  {
    id: "icon003",
    icon: VscTools,
    title: "skills",
    path: "/#skills",
  },
  {
    id: "icon004",
    icon: BiTask,
    title: "projects",
    path: "/#projects",
  },
  {
    id: "icon005",
    icon: BiMailSend,
    title: "contact",
    path: "/#contact",
  },
];

export let skillsIcons = [
  {
    id: "skills001",
    icon: DiJsBadge,
    title: "Javascript",
  },
  {
    id: "skills002",
    icon: DiReact,
    title: "React",
  },
  {
    id: "skills003",
    icon: DiHtml5,
    title: "HTML5",
  },
  {
    id: "skills004",
    icon: DiCss3,
    title: "CSS",
  },
  {
    id: "skills005",
    icon: DiSass,
    title: "Saas",
  },
  {
    id: "skills006",
    icon: SiStyledcomponents,
    title: "Styled Components",
  },
  {
    id: "skills007",
    icon: DiMysql,
    title: "SQL",
  },
  {
    id: "skills008",
    icon: MdOutlineSettingsEthernet,
    title: "Rest API",
  },
  {
    id: "skills009",
    icon: DiGit,
    title: "Git",
  },
  {
    id: "skills010",
    icon: DiGithubBadge,
    title: "Github",
  },
  {
    id: "skills011",
    icon: DiResponsive,
    title: "Responsive Design",
  },
  {
    id: "skills012",
    icon: FaUniversalAccess,
    title: "Accessibility",
  },
];
