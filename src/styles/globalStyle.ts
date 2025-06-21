import styled from "styled-components";

interface Props {
  variantColor: string;
}

export const Title = styled.h1<Props>`
  font-family: var(--decorative-font);
  font-size: 4.5rem;
  color: ${({ variantColor }) => variantColor};
  text-align: center;
  margin: 0 auto;

  @media (max-width: 609px) {
    font-size: 3rem;
  }
`;
