import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Container, Nav, Button, Logo, ContainerNav } from "./styles";
import { menuList } from "../../utils/menuList";

type MenuItem = {
  id?: string;
  title: string;
};

interface HeaderProps {
  menuItems: MenuItem[];
  isEnglish?: boolean;
}

const Header = ({ menuItems, isEnglish = false }: HeaderProps) => {
  const [sidebarActive, SetSiddebarActive] = useState<Boolean>();
  const lang = isEnglish ? "en" : "pt";
  const menu = menuList[lang];
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1020) {
        SetSiddebarActive(true);
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
        <Sidebar TitlePage={menu} isEnglish={isEnglish} />
      ) : (
        <div className="Containerall">
          <ContainerNav>
            {menuItems.map((item) =>
              item.title === "Início" || item.title === "Home" ? null : (
                <Nav href={`#${item.id}`} key={item.id}>
                  {item.title}
                </Nav>
              )
            )}
          </ContainerNav>
          <Button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=rackelrodrigues247@gmail.com",
                "_blank"
              )
            }
          >
            {isEnglish ? "Lets a Talk" : "  Entre em contato"}
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Header;
