import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .Containerall {
    display: flex;
    gap: 1rem;
  }
`;

export const Logo = styled.h2`
  color: var(--primary-color);
  font-family: var(--decorative-font);
  font-size: 2rem;
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
`;
