import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  top: 0;
  left: 0;
  width: 100%;

  /* @media screen and (max-width: 609px) {
    padding: 
  } */
  .Containerall {
    display: flex;
    gap: 1rem;

    @media (max-width: 1224px) {
      display: none;
    }
  }

  @media screen and (min-width: 610px) and (max-width: 1222px) {
    padding: 1rem 0.5rem;
    margin: 0;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 609px) {
    padding: 0.3rem 0.5rem;
  }
`;

export const Logo = styled.h2`
  color: var(--primary-color);
  font-family: var(--decorative-font);
  font-size: 1.8rem;

  @media screen and (min-width: 750px) and (max-width: 1280px) {
    font-size: 1.5rem;
    max-width: 30rem;
    display: flex;
  }

  @media (max-width: 599px) {
    font-size: 1rem;
  }
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
  &:hover {
    filter: brightness(0.9);
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const Nav = styled.a`
  color: var(--primary-color);
  font-family: var(--secondary-font);
  font-size: 1.5rem;
  font-weight: 200;
  cursor: pointer;
  text-decoration: none;
`;
