import styled from "styled-components";
import { AiOutlineCloudDownload } from "react-icons/ai";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  padding: 10rem 0 0 0 0;
  background-color: var(--primary-color);

  @media screen and (min-width: 750px) and (max-width: 1280px) {
    height: 100%;
    padding: 4rem 0 0 0 0;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.9rem;
  padding: 4rem 0 0 0;

  @media screen and (min-width: 750px) and (max-width: 1280px) {
    height: 100%;
    padding: 4rem 0 0 0;
    gap: 3rem;
  }

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const TextColumn = styled.div`
  flex: 1;

  @media screen and (max-width: 768px) {
    order: 1;
  }
`;

export const ImageColumn = styled.div`
  /* width: 30rem; */
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  /* margin-left: auto; */
  @media screen and (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;

export const PhotoAndText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextPage = styled.p`
  font-family: var(--main-font);
  font-size: 1.5rem;
  font-weight: 200;
  color: var(--background-color);
  max-width: 110rem;
  span {
    font-family: var(--decorative-font);
  }

  @media screen and (min-width: 750px) and (max-width: 1280px) {
    max-width: 65rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 40rem;
  }

  @media screen and (max-width: 480px) {
    max-width: 20rem;
  }
`;

export const Buttondownload = styled.button`
  border: 1px solid var(--background-color);
  outline: none;
  background-color: transparent;
  font-family: var(--main-font);
  font-size: 1.5rem;
  font-weight: 200;
  color: var(--background-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  margin: 2rem auto;
  padding: 0.5rem 1rem;

  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;

export const ContainerSubtitle = styled.div`
  display: block;
  margin: 2rem auto;
  text-align: center;
  gap: 0.6rem;
`;
export const Svgdownload = styled(AiOutlineCloudDownload)`
  width: 2rem;
  color: var(--background-color);
`;

export const Image = styled.img`
  display: block;
  height: 100%;

  width: 30rem;
  z-index: 1;
  object-fit: contain;
  /* position: relative; */
  /* margin-right: 4rem; */
  max-width: 100%;
  bottom: 0;

  @media screen and (max-width: 768px) {
    order: 0;
  }
`;
export const ImageEffect = styled.img`
  width: 100%;
  height: 100%;
  z-index: 0;
  /* position: absolute; */
  /* top: 0;
  left: 0; */
`;

export const ContainerImages = styled.div`
  /* position: relative; */
  height: 100%;
  /* width: 30rem; */
  /* float: right; */
  display: flex;
  align-items: end;
  justify-content: flex-end;
  flex-direction: column;
  overflow: hidden;
  /* shape-outside: circle(50% at 30%); */

  @media screen and (max-width: 768px) {
    order: 0;
    justify-content: center;
    align-items: center;
  }
`;
export const TagName = styled.p`
  font-size: 1.9rem;
  font-family: var(--decorative-font);
  color: var(--background-color);
  z-index: 2;
  position: relative;
`;
