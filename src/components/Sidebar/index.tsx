import React, { useState } from "react";
import {
  ButtonMenu,
  SidebarContainer,
  NavLink,
  ContainerButton,
  HamburgerMenu,
  HamburgerMenuopen,
  Button,
  Container,
} from "./styles";

type Title = {
  id: string;
  title: string;
};

interface Props {
  TitlePage?: Title[];
  isEnglish?: boolean;
}

export const Sidebar: React.FC<Props> = ({ TitlePage, isEnglish }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Container>
        <ContainerButton>
          <ButtonMenu onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HamburgerMenuopen /> : <HamburgerMenu />}
          </ButtonMenu>
        </ContainerButton>
        <SidebarContainer isActive={isOpen}>
          {isOpen && (
            <div className="ContainerNav">
              {TitlePage?.map((item) => (
                <NavLink href={`#${item.id}`} key={item.id}>
                  {item.title}
                </NavLink>
              ))}
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
        </SidebarContainer>
      </Container>
    </>
  );
};

export default Sidebar;
