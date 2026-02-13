import styled from "styled-components";

interface Props {
  Variante: 1 | 2;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 28rem;

  @media screen and (max-width: 609px) {
    padding: 0;
    max-width: 20rem;
  }

  .buttonsContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 1.5rem;

    @media screen and (max-width: 609px) {
      gap: 0.5rem;
    }
  }
`;

export const Button = styled.button<Props>`
  outline: none;
  padding: 0.5rem 3.5rem;
  flex: 1;

  background-color: ${({ Variante }) =>
    Variante === 1 ? "var(--primary-color)" : "transparent"};
  border: 1px solid var(--primary-color);
  color: ${({ Variante }) =>
    Variante === 1 ? "var( --background-color)" : "var(--primary-color)"};
  text-decoration: none;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 609px) {
    padding: 0.5rem 2rem;
  }
`;

export const Linguages = styled.span`
  font-family: var(--secondary-font);
  font-size: 1rem;
  font-weight: 200;
  background-color: transparent;
  padding: 0 0.3rem;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  border-radius: 0.2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    font-weight: 300;
    padding: 0 0.1rem;
  }
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: var(--primary-color);

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

export const Nameproject = styled.h3`
  font-family: var(--secondary-font);
  font-size: 1.5rem;
  font-weight: 200;
  color: var(--primary-color);
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ImageProjct = styled.img`
  max-width: 28rem;
  max-height: 18rem;
  width: 100%;
  height: 100%;
  border: 2px solid var(--primary-color);
  border-radius: 0.3rem;

  @media screen and (max-width: 609px) {
    max-width: 25rem;
    max-height: 15rem;
  }
`;

export const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex: 1;
  width: 100%;
  white-space: nowrap;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0.5rem 0 0.5rem 0;
`;
