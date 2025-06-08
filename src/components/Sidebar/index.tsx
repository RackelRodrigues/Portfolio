import React, { useState } from "react";
import {
  ButtonMenu,
  SidebarContainer,
  ContainerUrl,
  NavLink,
  ContainerButton,
  HamburgerMenu,
  HamburgerMenuopen,
  Button,
  Test,
} from "./styles";

type Title = {
  //   path: string;
  title: string;
};

interface Props {
  TitlePage?: Title[];
  isMobile?: boolean;
}

export const Sidebar: React.FC<Props> = ({ TitlePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Test>
        <ContainerButton>
          <ButtonMenu onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HamburgerMenuopen /> : <HamburgerMenu />}
          </ButtonMenu>
        </ContainerButton>
        <SidebarContainer isActive={isOpen}>
          {isOpen && (
            <div className="ContainerNav">
              {TitlePage?.map((item, index) => (
                <ContainerUrl key={index}>
                  <NavLink>{item.title}</NavLink>
                </ContainerUrl>
              ))}
              <Button>Let's Talk</Button>
            </div>
          )}
        </SidebarContainer>
      </Test>
    </>
  );
};

export default Sidebar;
