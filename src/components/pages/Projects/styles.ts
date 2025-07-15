import styled from "styled-components";

export const Background = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem auto;
  width: 100%;
  max-width: 100rem;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 2rem;

  @media screen and (min-width: 765px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 0;
    max-width: 55rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    margin: 4rem auto;
    align-items: center;
    justify-items: center;
  }

  @media screen and (max-width: 609px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
    margin: 0 auto;
    gap: 1rem;
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

export const Container = styled.div``;
