import SajjBoutique from "../../assets/SajjMockup.png";
import CreamyCreations from "../../assets/CreamyCreationMockup.png";
import Pharmacy from "../../assets/PharmasaveMockup.JPG";
import { DiHtml5, DiCss3, DiReact, DiSass } from "react-icons/di";
import { SiVite } from "react-icons/si";

let Data = [
  {
    id: "003",
    img: Pharmacy,
    heading: "Speers Pharmacy",
    Description:
      "Speers Pharmacy is a responsive web application features online prescription ordering, refilling, product showcasing, and consultation booking.",
    Icons: ["Vite", "React", "MUI", "Recoil"],
  },
  {
    id: "002",
    img: SajjBoutique,
    heading: "SajjBoutique",
    Description:
      "SajjBoutique is a responsive web application for a local clothing store",
    Icons: ["React", "Saas"],
  },

  {
    id: "001",
    img: CreamyCreations,
    heading: "Creamy Creations",
    Description:
      "Creamy Creations is a responsive mobile-friendly web application for a local bakery to showcase collection with a user-friendly photo gallery",
    Icons: ["React", "CSS3"],
  },
];

export default Data;
