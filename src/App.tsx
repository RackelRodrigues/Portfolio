import { menuList } from "./utils/menuList.ts";
import Header from "./components/Header/index.tsx";
import AboutMe from "./components/pages/Aboutme/index.tsx";
import Home from "./components/pages/Home/index.tsx";
import MySkills from "./components/pages/MySkills/index.tsx";
import Projects from "./components/pages/Projects/index.tsx";
import ProjectsFigma from "./components/pages/ProjectsFigma/index.tsx";
import Footer from "./components/Footer/index.tsx";
import { PageContent } from "./styles/globalStyle.ts";
import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [loading, setLoading] = useState(true);

  const menu = menuList[isEnglish ? "en" : "pt"];
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <PageContent>
      <Header menuItems={menu} isEnglish={isEnglish} />
      <main>
        <Home id="Home" isEnglish={isEnglish} onChangeLanguage={setIsEnglish} />
        <AboutMe id="About" isEnglish={isEnglish} />
        <MySkills id="Skills" isEnglish={isEnglish} />
        <Projects id="Projects" isEnglish={isEnglish} />
        <ProjectsFigma id="Figma" isEnglish={isEnglish} />
      </main>
      <Footer menuItems={menu} isEnglish={isEnglish} />
    </PageContent>
  );
}

export default App;
