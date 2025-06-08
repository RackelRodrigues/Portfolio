import { Background, Text, HelloMessage, Button, Image } from "./styles";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      {/* <Header MenuItems={menuList} /> */}
      <Background>
        <Image src="src/assets/images/Rackel.svg" alt="foto minha" />
        <div>
          <HelloMessage>Hello</HelloMessage>
          <Text>
            Sou <span>Rackel Rodrigues</span>, desenvolvedora web apaixonada por
            transformar ideias em realidade através de código.
          </Text>
          <Text>Bem-vindo ao meu mundo digital!</Text>
        </div>
      </Background>

      <Button>
        Let's go
        <FaArrowRightLong size={20} />
      </Button>
    </>
  );
};

export default Home;
