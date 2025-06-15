import styled from "styled-components";
import { RxDiscordLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";

export const Container = styled.footer`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 10rem;
  background-color: var(--primary-color);

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0 0.3rem;
  }
  .socialContainer {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Logo = styled.h2`
  color: var(--secondary-color);
  font-family: var(--decorative-font);
  font-size: 2.16rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Line = styled.span`
  display: block;
  width: 1px;
  height: 5rem;
  background-color: #ccc;
`;

export const Text = styled.p`
  font-family: var(--main-font);
  font-size: 1rem;
  font-weight: 100;
  color: var(--background-color);

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const Nav = styled.a`
  color: var(--background-color);
  font-family: var(--secondary-font);
  font-size: 1.3rem;
  font-weight: 200;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const SocialMedia = styled.a`
  background-color: var(--background-color);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  @media screen and (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const StyledDiscord = styled(RxDiscordLogo)`
  font-size: 2rem;
  color: var(--secondary-color);

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const StyledInstagram = styled(FaInstagram)`
  width: 2rem;
  height: 2rem;
  color: var(--secondary-color);
  @media screen and (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledLinkedin = styled(LiaLinkedin)`
  width: 2rem;
  height: 2rem;
  color: var(--secondary-color);
  @media screen and (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    width: 1rem;
    height: 1rem;
  }
`;

export const StyledGithub = styled(FiGithub)`
  width: 2rem;
  color: var(--secondary-color);
  @media screen and (max-width: 768px) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media screen and (max-width: 480px) {
    width: 1rem;
    height: 1rem;
  }
`;
