import styled from "styled-components";

export const Background = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem auto;
  width: 100%;
  max-width: 100rem;
  align-items: center;
  justify-items: center;
  gap: 3rem;

  @media screen and (min-width: 765px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    margin: 4rem auto;
  }
`;

export const Container = styled.div``;
