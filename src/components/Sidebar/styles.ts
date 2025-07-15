import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
interface SidebarProps {
  isActive?: boolean;
}

export const Container = styled.div`
  position: relative;
  background-color: transparent;
  height: 100%;
  z-index: 1000;
`;
export const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  width: 100%;
  max-width: 25rem;
  min-width: 15rem;
  height: auto;
  z-index: 1000;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);

  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  background: var(--background-color);

  transition: right 0.4s ease-in-out;

  @media screen and (max-width: 480px) {
    height: auto;
    padding: 0 0 0 1rem;
    max-width: 10rem;
  }

  @media screen and (max-width: 320px) {
    height: auto;
    padding: 0 0 0 1rem;

    max-width: 10rem;
  }

  .ContainerNav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 1rem 1rem 1rem;
    gap: 4rem;
    background-color: transparent;

    position: relative;
    @media screen and (max-width: 320px) {
      gap: 3.2rem;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-items: center;
  background: transparent;
  z-index: 10000;
`;

export const NavLink = styled.a`
  font-family: var(--main-font);
  font-size: 1.6rem;
  font-weight: 300;
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: none;
  width: 100%;
  z-index: 10000;
  background-color: transparent;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  position: relative;
  z-index: 1100;
  background: transparent;
  border: none;
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const HamburgerMenu = styled(RxHamburgerMenu)`
  cursor: pointer;
  background-color: transparent;
  color: var(--primary-color);
  width: 1.8rem;
  height: 1.8rem;
`;
export const HamburgerMenuopen = styled(RiCloseLargeLine)`
  cursor: pointer;
  background-color: transparent;
  color: var(--primary-color);
  width: 1.8rem;
  height: 1.8rem;
`;

export const Button = styled.button`
  color: var(--background-color);
  background-color: var(--primary-color);
  border-radius: 0.5rem;
  font-family: var(--secondary-font);
  font-size: 1rem;
  padding: 0.3rem 2rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  margin-right: 1rem;
`;
