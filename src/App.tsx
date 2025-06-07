import { menuList } from "./utils/menuList.ts";
import Header from "./components/Header/index.tsx";
import AboutMe from "./components/pages/Aboutme/index.tsx";
import Home from "./components/pages/Home/index.tsx";

function App() {
  return (
    <>
      <Header MenuItems={menuList} />
      <Home />
      <AboutMe />
    </>
  );
}

export default App;
