import { menuList } from "./utils/menuList.ts";
import Header from "./components/Header/index.tsx";
import AboutMe from "./components/pages/Aboutme/index.tsx";
import Home from "./components/pages/Home/index.tsx";
import MySkills from "./components/pages/MySkills/index.tsx";
import Projects from "./components/pages/Projects/index.tsx";
import ProjectsFigma from "./components/pages/ProjectsFigma/index.tsx";
import Footer from "./components/Footer/index.tsx";
import { useState } from "react";

function App() {
  const [isEnglish, setIsEnglish] = useState(false);

  const menu = menuList[isEnglish ? "en" : "pt"];

  return (
    <>
      <Header menuItems={menu} isEnglish={isEnglish} />
      <Home id="Home" isEnglish={isEnglish} onChangeLanguage={setIsEnglish} />
      <AboutMe id="About" isEnglish={isEnglish} />
      <MySkills id="Skills" isEnglish={isEnglish} />
      <Projects id="Projects" isEnglish={isEnglish} />
      <ProjectsFigma id="Figma" isEnglish={isEnglish} />
      <Footer menuItems={menu} isEnglish={isEnglish} />
    </>
  );
}

export default App;
