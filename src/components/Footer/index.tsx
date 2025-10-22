import {
  Container,
  ContainerNav,
  Logo,
  Nav,
  SocialMedia,
  Text,
  StyledGithub,
  StyledInstagram,
  StyledLinkedin,
  StyledDiscord,
} from "./styles";
import { buttonLinks } from "../../utils/ListLinks";

type MenuItem = {
  id?: string;
  title: string;
};

interface FooterProps {
  menuItems: MenuItem[];
  isEnglish?: boolean;
}
const Footer = ({ menuItems, isEnglish }: FooterProps) => {
  return (
    <>
      <Container>
        <Logo>Rackel Rodrigues</Logo>

        <div className="info">
          <div>
            <ContainerNav>
              {menuItems.map((item) => (
                <Nav href={`#${item.id}`} key={item.title}>
                  {item.title}
                </Nav>
              ))}
            </ContainerNav>
            <Text>
              {isEnglish
                ? "© 2025 Rackel Rodrigues. All rights reserved."
                : "© 2025 Rackel Rodrigues. Todos os direitos reservados"}
            </Text>
          </div>
        </div>
        <div className="socialContainer">
          <SocialMedia
            href={buttonLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttonLinks[0].title}
            title={buttonLinks[0].title}
          >
            <StyledInstagram />
          </SocialMedia>
          <SocialMedia
            href={buttonLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttonLinks[1].title}
            title={buttonLinks[1].title}
          >
            <StyledLinkedin />
          </SocialMedia>
          <SocialMedia
            href={buttonLinks[2].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttonLinks[2].title}
            title={buttonLinks[2].title}
          >
            <StyledDiscord />
          </SocialMedia>
          <SocialMedia
            href={buttonLinks[3].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={buttonLinks[3].title}
            title={buttonLinks[3].title}
          >
            <StyledGithub size={27} />
          </SocialMedia>
        </div>
      </Container>
    </>
  );
};

export default Footer;
