import styled from "styled-components";

interface Props {
  percentage: number;
  BackgroundColor: string;
  ColorPorcetage: string;
}

export const Container = styled.div`
  /* clip-path: inset(0 0 0 50%); */
  background: conic-gradient(#6c63ff 75%, transparent 75%);
  width: 120px;
  height: 120px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const ImageTecn = styled.img`
  width: 50px;
  height: 50px;
`;

export const Porcentage = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
