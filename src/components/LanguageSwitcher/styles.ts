import styled from "styled-components";

export const LanguageButtonWrapper = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
  z-index: 100;
  overflow: hidden;

  @media screen and (min-width: 768px) and (max-width: 1022px) {
    top: 7rem;
    left: 0;
    right: unset;
  }

  @media screen and (min-width: 318px) and (max-width: 426px) {
    top: 5rem;
    left: 0;
    right: auto;
    z-index: 1000;
  }
`;

export const Button = styled.button`
  width: 4rem;
  height: 100%;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border: none;
  outline: none;
  background-color: var(--secondary-color);
  border-radius: 5rem 0 0 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  position: relative;
  z-index: 100;

  @media screen and (min-width: 765px) and (max-width: 1022px) {
    border-radius: 0 5rem 5rem 0;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem 0.5rem 0;
    width: 3.5rem;
  }

  @media screen and (min-width: 318px) and (max-width: 426px) {
    border-radius: 0 5rem 5rem 0;
    justify-content: flex-end;
    padding: 0.5rem 0.5rem 0.5rem 0;
    width: 3.5rem;
  }
`;

export const FlagImage = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;
