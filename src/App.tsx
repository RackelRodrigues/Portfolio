import { menuList } from "./utils/menuList.ts";
import Header from "./components/Header/index.tsx";
import AboutMe from "./components/pages/Aboutme/index.tsx";
import Home from "./components/pages/Home/index.tsx";
import MySkills from "./components/pages/MySkills/index.tsx";
import Projects from "./components/pages/Projects/index.tsx";
import ProjectsFigma from "./components/pages/ProjectsFigma/index.tsx";
import Footer from "./components/Footer/index.tsx";

function App() {
  return (
    <>
      <Header menuItems={menuList} />
      <Home id="Home" />
      <AboutMe id="About" />
      <MySkills id="Skills" />
      <Projects id="Projects" />
      <ProjectsFigma id="Figma" />
      <Footer menuItems={menuList} />
    </>
  );
}

export default App;
