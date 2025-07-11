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
}

const Header = ({ menuItems }: HeaderProps) => {
  const [sidebarActive, SetSiddebarActive] = useState<Boolean>();

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
        <Sidebar TitlePage={menuList} />
      ) : (
        <div className="Containerall">
          <ContainerNav>
            {menuItems.map((item) =>
              item.title === "Início" ? null : (
                <Nav href={`#${item.id}`} key={item.title}>
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
            Let's Talk
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Header;
