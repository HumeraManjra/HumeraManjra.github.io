import SajjBoutique from "../../assets/SajjMockup.png";
import CreamyCreations from "../../assets/CreamyCreationMockup.png";
import { DiHtml5, DiCss3, DiReact, DiSass } from "react-icons/di";

let Data = [
  {
    id: "001",
    img: SajjBoutique,
    heading: "SajjBoutique",
    Description:
      "SajjBoutique is a responsive web application for a local clothing store",
    Icons: [DiHtml5, DiSass, DiReact],
    URL: "https://sajjboutique.ca/",
  },

  {
    id: "002",
    img: CreamyCreations,
    heading: "Creamy Creations",
    Description:
      "Creamy Creations is a responsive web application for Cake Shop",
    Icons: [DiHtml5, DiCss3, DiReact],
    URL: "https://creamycreations.ca/",
  },

  //   {
  //   id: "003",
  //   img: "Coming soon...",
  //   heading: "Pharmasave Speers Pharmacy",
  //   Description: "Pharmasave Speers Pharmacy is a responsive web application for filling online prescription, booking appointments, view services and more",
  //   Icons: [DiHtml5, DiCss3, DiReact],
  //   URL: " ",
  // },
];

export default Data;
