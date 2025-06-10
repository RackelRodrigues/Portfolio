import styled from "styled-components";

interface Props {
  Variante: 1 | 2;
}

export const Background = styled.div``;

export const Container = styled.div``;

export const Button = styled.button<Props>`
  outline: none;
  padding: 0.5rem 1rem;
  background-color: ${({ Variante }) =>
    Variante === 1 ? "var(--primary-color)" : "transparent"};
  border: ${({ Variante }) =>
    Variante === 1 ? "none" : "1px solid var(--primary-color)"};
  color: ${({ Variante }) =>
    Variante === 1 ? "var( --background-color)" : "var(--primary-color)"};
`;

export const Linguages = styled.span`
  background-color: transparent;
  border: 1px solid var(--primary-color);
`;

export const Description = styled.p`
  /* font-family: inter; */
`;

export const Nameproject = styled.h3`
  font-family: var(--secondary-font);
  font-size: 1rem;
  font-weight: 200;
`;

export const ImageProjct = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid var(--primary-color);
`;
