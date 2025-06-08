import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Container, Nav, Button, Logo, ContainerNav } from "./styles";
import { menuList } from "../../utils/menuList";

type MenuItem = {
  title: string;
};

interface HeaderProps {
  MenuItems: MenuItem[];
}

const Header = ({ MenuItems }: HeaderProps) => {
  const [sidebarActive, SetSiddebarActive] = useState<Boolean>();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        SetSiddebarActive(true);
        console.log("Tablet detectado");
      } else {
        SetSiddebarActive(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Container>
      <Logo>Rackel Rodrigues</Logo>
      {sidebarActive ? (
        <Sidebar TitlePage={menuList} />
      ) : (
        <div className="Containerall">
          <ContainerNav>
            {MenuItems.map((item) => (
              <Nav key={item.title}>{item.title}</Nav>
            ))}
          </ContainerNav>
          <Button>Let's Talk</Button>
        </div>
      )}
    </Container>
  );
};

export default Header;
