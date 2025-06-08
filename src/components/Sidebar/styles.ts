import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
interface SidebarProps {
  isActive?: boolean;
}

export const Test = styled.div`
  background-color: transparent;
  height: 100%;

  /* @media (max-width: 599px) {
    max-width: 50rem;
  } */
`;
export const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  top: 0;
  right: ${({ isActive }) => (isActive ? "0" : "-100%")};
  width: 18rem;
  max-width: 25rem;
  min-width: 15rem;
  height: 40vh;
  z-index: 1000;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  flex-direction: column;
  background: rgba(255, 255, 255, 0.6);
  /* backdrop-filter: blur(10px); */
  /* padding-left: 2rem; */

  transition: right 0.4s ease-in-out;
  @media (max-width: 768px) {
    height: 55vh;
    padding: 0 0 0 1rem;
  }
  @media (max-width: 480px) {
    height: 60vh;
    padding: 0 0 0 1rem;
  }
  .ContainerNav {
    /* width: 100%; */
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding-top: 8rem;
    gap: 4rem;
    background-color: transparent;

    @media (max-width: 599px) {
      max-height: 50rem;
    }
  }
`;
export const ContainerUrl = styled.div`
  /* width: 100%; */
  background: transparent;
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
  margin-top: 2rem;
  background-color: transparent;
  &:hover {
    text-decoration: none;
    /* border-right: 1px solid #fff; */
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
