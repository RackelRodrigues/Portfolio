import { Container, Nav, Button, Logo, ContainerNav } from "./styles";

type MenuItem = {
  title: string;
};

interface HeaderProps {
  MenuItems: MenuItem[];
}

const Header = ({ MenuItems }: HeaderProps) => {
  return (
    <Container>
      <Logo>Rackel Rodrigues</Logo>
      <div className="Containerall">
        <ContainerNav>
          {MenuItems.map((item) => (
            <Nav>{item.title}</Nav>
          ))}
        </ContainerNav>

        <Button>Let's Talk</Button>
      </div>
    </Container>
  );
};

export default Header;
