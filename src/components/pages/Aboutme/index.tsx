import { Title } from "../../../styles/globalStyle";
import {
  Background,
  Buttondownload,
  Image,
  TagName,
  TextPage,
  Svgdownload,
  ContainerImages,
  Container,
  PhotoAndText,
  ImageColumn,
  TextColumn,
  ContainerSubtitle,
} from "./styles";
import Resume from "/images/_curriculo rackel.pdf";

interface AboutMeProps {
  id?: string;
  isEnglish: boolean;
}

const AboutMe = ({ id, isEnglish }: AboutMeProps) => {
  return (
    <Background id={id}>
      <Title variantColor="var(--background-color)">
        {isEnglish ? "About me" : "Sobre mim"}
      </Title>
      <Container>
        {isEnglish ? (
          <>
            <TextPage align={false}>
              Pleasure! I'm <span>Rackel Rodrigues</span>, 24 years old, and a
              Computer Science student at UEPB. I love creating digital
              experiences and found myself in front-end web development.
            </TextPage>
            <TextPage align={false}>
              I have experience with ReactJS, TypeScript, and some knowledge of
              Next.js. I also use Figma to align code with visual experience,
              which helps me design more intuitive and accessible interfaces.
            </TextPage>
            <TextPage align={false}>
              I'm passionate about reading — it inspires me to be a more
              creative, focused, and human professional. I'm ready to exchange
              ideas, collaborate, and grow alongside amazing people in tech.
            </TextPage>
          </>
        ) : (
          <>
            <TextPage align={false}>
              Prazer! Sou <span>Rackel Rodrigues</span>, tenho 24 anos e curso
              Ciência da Computação na UEPB. Amo criar experiências digitais, e
              me encontrei no desenvolvimento web front-end.
            </TextPage>
            <TextPage align={false}>
              Tenho experiência com ReactJS, TypeScript e noções de Next.js.
              Também utilizo Figma para alinhar código com experiência visual, o
              que me ajuda a pensar em interfaces mais intuitivas e acessíveis.
            </TextPage>
            <TextPage align={false}>
              Sou apaixonada por leitura — ela me inspira a ser uma profissional
              mais criativa, focada e humana. Estou pronta para trocar ideias,
              colaborar e crescer junto com pessoas incríveis na área.
            </TextPage>
          </>
        )}

        <PhotoAndText>
          <ImageColumn>
            <TagName>Hey, There!</TagName>
            <ContainerImages>
              <Image
                src="images/Me/fot_port2.png"
                alt="Rackel Rodrigues"
                fetchPriority="high"
              />
            </ContainerImages>
          </ImageColumn>
          <TextColumn>
            {isEnglish ? (
              <TextPage align={true}>
                I'm happy to share a bit of my journey with you. <br />
                May we build new possibilities together.
              </TextPage>
            ) : (
              <TextPage align={true}>
                Fico feliz por poder dividir um pouco da minha jornada. <br />
                Que possamos juntos construir novas possibilidades
              </TextPage>
            )}

            <ContainerSubtitle>
              {isEnglish ? (
                <>
                  <TextPage align={false}>Best regards,</TextPage>
                  <TextPage align={false}>Rackel Rodrigues</TextPage>
                </>
              ) : (
                <>
                  <TextPage align={false}>Abraço,</TextPage>
                  <TextPage align={false}>Rackel Rodrigues</TextPage>
                </>
              )}
            </ContainerSubtitle>
            <Buttondownload onClick={() => window.open(Resume)}>
              <Svgdownload />
              {isEnglish ? "Resume" : "Currículo"}
            </Buttondownload>
          </TextColumn>
        </PhotoAndText>
      </Container>
    </Background>
  );
};

export default AboutMe;
