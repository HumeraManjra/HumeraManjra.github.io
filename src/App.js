import { BrowserRouter } from "react-router-dom";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import About from "./Components/about/About";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
