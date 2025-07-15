import LanguageSwitcher from "../../LanguageSwitcher";
import { Background, Text, HelloMessage, Image, ContainerAll } from "./styles";

interface HomeProps {
  id?: string;
  isEnglish: boolean;
  onChangeLanguage: (isEnglish: boolean) => void;
}

const Home = ({ id, isEnglish, onChangeLanguage }: HomeProps) => {
  return (
    <ContainerAll>
      <Background id={id}>
        <Image src="images/Me/Rackel.svg" alt="foto minha" />
        <div>
          <HelloMessage>Hello</HelloMessage>
          {isEnglish ? (
            <>
              <Text>
                I'm <span>Rackel Rodrigues</span>, a web developer passionate
                about turning ideas into reality through code.
              </Text>
              <Text>Welcome to my digital world!</Text>
            </>
          ) : (
            <>
              <Text>
                Sou <span>Rackel Rodrigues</span>, desenvolvedora web apaixonada
                por transformar ideias em realidade através de código.
              </Text>
              <Text>Bem-vindo ao meu mundo digital!</Text>
            </>
          )}
        </div>
        <LanguageSwitcher
          isEnglish={isEnglish}
          onChangeLanguage={onChangeLanguage}
        />
      </Background>
      {/* <LanguageSwitcher
        isEnglish={isEnglish}
        onChangeLanguage={onChangeLanguage}
      /> */}
    </ContainerAll>
  );
};

export default Home;
