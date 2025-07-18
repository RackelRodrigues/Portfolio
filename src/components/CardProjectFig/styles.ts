import styled from "styled-components";

export const ContainerAll = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 9rem;
  row-gap: 3rem;
  width: 100%;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: 610px) and (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 609px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
    margin: 0 auto;
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 37rem;

  @media screen and (min-width: 610px) and (max-width: 1280px) {
    max-width: 40rem;
    padding: 0 1rem;
  }
  @media screen and (max-width: 609px) {
    max-width: 30rem;
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 450px) {
    max-width: 20rem;
  }
  .buttonsContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  outline: none;
  padding: 1rem 4rem;
  flex: 1;
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: var(--background-color);
  text-decoration: none;
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  width: 50rem;
  @media screen and (min-width: 750px) and (max-width: 1280px) {
    padding: 1rem 4rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 2rem;
  }
`;

export const Walpaper = styled.img`
  max-width: 37rem;
  max-height: 21rem;
  height: 100%;
  width: 100%;
  border-radius: 0.3rem;

  @media screen and (min-width: 610px) and (max-width: 1280px) {
    max-width: 40rem;
    max-height: 28rem;
  }

  @media screen and (max-width: 609px) {
    max-width: 30rem;
    max-height: 25rem;
  }
`;
