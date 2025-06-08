import { menuList } from "./utils/menuList.ts";
import Header from "./components/Header/index.tsx";
import AboutMe from "./components/pages/Aboutme/index.tsx";
import Home from "./components/pages/Home/index.tsx";
import SkillBar from "./components/Skillbar/index.tsx";

function App() {
  return (
    <>
      <Header MenuItems={menuList} />
      <Home />
      <AboutMe />
      <SkillBar />
    </>
  );
}

export default App;
