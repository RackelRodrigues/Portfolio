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
}
const Footer = ({ menuItems }: FooterProps) => {
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

            <Text>© 2025 Rackel Rodrigues. Todos os direitos reservados.</Text>
          </div>
        </div>
        <div className="socialContainer">
          <SocialMedia
            href={buttonLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledInstagram />
          </SocialMedia>
          <SocialMedia
            href={buttonLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLinkedin />
          </SocialMedia>
          <SocialMedia
            href={buttonLinks[2].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledDiscord />
          </SocialMedia>
          <SocialMedia
            href={buttonLinks[3].href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledGithub size={27} />
          </SocialMedia>
        </div>
      </Container>
    </>
  );
};

export default Footer;
