import React, { useState } from "react";
import {
  ButtonMenu,
  SidebarContainer,
  NavLink,
  ContainerButton,
  HamburgerMenu,
  HamburgerMenuopen,
  Button,
  Test,
} from "./styles";

type Title = {
  id: string;
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
                <NavLink href={`#${item.id}`} key={index}>
                  {item.title}
                </NavLink>
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
