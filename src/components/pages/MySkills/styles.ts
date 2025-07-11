import styled from "styled-components";

export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
  width: 100%;
  align-items: center;
  justify-items: center;
  gap: 6rem;
  height: 90vh;

  @media screen and (min-width: 610px) and (max-width: 1280px) {
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 609px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    height: 100%;
  }
`;

export const Container = styled.div``;
