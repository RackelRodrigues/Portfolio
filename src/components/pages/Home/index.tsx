import {
  Background,
  Text,
  HelloMessage,
  // Button,
  Image,
} from "./styles";

interface HomeProps {
  id?: string;
}

const Home = ({ id }: HomeProps) => {
  return (
    <div>
      <Background id={id}>
        <Image src="images/Rackel.svg" alt="foto minha" />
        <div>
          <HelloMessage>Hello</HelloMessage>
          <Text>
            Sou <span>Rackel Rodrigues</span>, desenvolvedora web apaixonada por
            transformar ideias em realidade através de código.
          </Text>
          <Text>Bem-vindo ao meu mundo digital!</Text>
        </div>
      </Background>
    </div>
  );
};

export default Home;
