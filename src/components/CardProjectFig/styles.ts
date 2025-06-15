import styled from "styled-components";

export const ContainerAll = styled.div`
  /* margin-top: 5rem; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 100%;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: 765px) and (max-width: 1280px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 768px) {
    align-items: center;
    justify-items: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    /* width: 40rem; */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Container = styled.div`
  width: 100%;
  max-width: 37rem;

  @media screen and (min-width: 750px) and (max-width: 1280px) {
    max-width: 50rem;
  }
  @media screen and (max-width: 768px) {
    max-width: 40rem;
  }

  @media screen and (max-width: 480px) {
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
  padding: 0.6rem 4rem;
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
  width: 37rem;
  height: 21rem;

  @media screen and (min-width: 750px) and (max-width: 1280px) {
    width: 50rem;
    height: 28rem;
  }

  @media screen and (max-width: 768px) {
    width: 40rem;
    height: 25rem;
  }

  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 12rem;
  }
`;
