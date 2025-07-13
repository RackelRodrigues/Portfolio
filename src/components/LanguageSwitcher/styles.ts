import styled from "styled-components";

export const LanguageButtonWrapper = styled.div`
  position: absolute;
  top: 10rem;
  right: 0;
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
`;

export const FlagImage = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`;
