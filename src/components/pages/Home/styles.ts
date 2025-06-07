import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 4rem;
  height: 90vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 31.25rem;
  max-height: 31.25rem;
  cursor: pointer;
`;

export const Text = styled.h4`
  font-family: var(--main-font);
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: 200;
  max-width: 39rem;
  span {
    color: var(--secondary-color);
  }
`;

export const HelloMessage = styled.h1`
  color: var(--primary-color);
  font-family: var(--decorative-font);
  font-size: 7.3rem;
`;

export const Button = styled.button`
  border: 2px solid var(--primary-color);
  background-color: transparent;
  color: var(--primary-color);
  border-radius: 0.5rem;
  padding: 0.8rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-family: var(--main-font);
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
