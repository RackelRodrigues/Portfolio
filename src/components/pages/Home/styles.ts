import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  /* padding-top: 4rem; */
  gap: 4rem;
  height: 90vh;
  @media (max-width: 768px) {
    gap: 2rem;
  }
  @media (max-width: 599px) {
    gap: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 31.25rem;
  max-height: 31.25rem;
  cursor: pointer;
  @media (max-width: 768px) {
    max-width: 18rem;
    max-height: 18rem;
  }
  @media (max-width: 599px) {
    max-width: 10rem;
    max-height: 10rem;
  }
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
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  @media (max-width: 599px) {
    font-size: 1rem;
  }
`;

export const HelloMessage = styled.h1`
  color: var(--primary-color);
  font-family: var(--decorative-font);
  font-size: 7.3rem;
  @media (max-width: 768px) {
    font-size: 6rem;
  }
  @media (max-width: 599px) {
    font-size: 4rem;
  }
`;

export const Button = styled.button`
  border: 2px solid var(--primary-color);
  background-color: transparent;
  color: var(--primary-color);
  border-radius: 0.5rem;
  padding: 0.8rem 5rem;
  display: flex;
  align-self: center;
  justify-self: center;
  gap: 0.3rem;
  font-family: var(--main-font);
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  position: relative;
  top: -80px;
  @media (max-width: 599px) {
    padding: 0.8rem 3rem;
    top: -110px;
  }
  /* width: 100%; */
  /* position: relative;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;
