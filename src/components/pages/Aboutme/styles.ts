import styled from "styled-components";
import { AiOutlineCloudDownload } from "react-icons/ai";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color);
`;

export const TextPage = styled.p`
  font-family: var(--main-font);
  font-size: 1.5rem;
  color: var(--background-color);
  max-width: 75rem;

  span {
    font-family: var(--decorative-font);
  }
`;

export const Buttondownload = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-family: var(--main-font);
  font-size: 1.2rem;
`;

export const Svgdownload = styled(AiOutlineCloudDownload)`
  width: 2rem;
  color: var(--background-color);
`;

export const Image = styled.img`
  display: flex;
  height: 100%;
  align-items: end;
  justify-content: flex-end;
  flex-direction: column;
  width: 30rem;
  z-index: 1;
  position: relative;
`;
export const ImageEffect = styled.img`
  width: 30rem;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ContainerImages = styled.div`
  position: relative;
  height: auto;
  width: 30rem;
  float: right;
`;
export const TagName = styled.p`
  font-size: 1.7rem;
  font-family: var(--decorative-font);
  color: var(--background-color);
`;
