import styled from "styled-components";

interface Props {
  percentage?: number;
  BackgroundColor?: string;
  colorPorcentage?: string;
}

export const Container = styled.div<Props>`
  /* clip-path: inset(0 0 0 50%); */
  background: ${({ percentage, colorPorcentage }) =>
    `conic-gradient(from -90deg, ${colorPorcentage} ${percentage}%, transparent ${percentage}%)`};
  border-radius: 50%;

  width: 120px;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const ImageTecn = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  object-fit: contain;
  /* width: 100%;
  height: auto;
  max-width: 3.2rem; */
  /* max-height: 3.2rem; */
`;

export const Porcentage = styled.div<Props>`
  width: 100px;
  height: 100px;
  background-color: ${({ BackgroundColor }) => BackgroundColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
