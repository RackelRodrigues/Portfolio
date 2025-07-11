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
}

const AboutMe = ({ id }: AboutMeProps) => {
  return (
    <Background id={id}>
      <Title variantColor="var(--background-color)">Sobre mim</Title>
      <Container>
        <TextPage align={false}>
          Prazer! Sou <span>Rackel Rodrigues</span>, tenho 24 anos e curso
          Ciência da Computação na UEPB. Amo criar experiências digitais, e me
          encontrei no desenvolvimento web front-end
        </TextPage>
        <TextPage align={false}>
          Tenho experiência com ReactJS, TypeScript e noções de Next.js. Também
          utilizo Figma para alinhar código com experiência visual, o que me
          ajuda a pensar em interfaces mais intuitivas e acessíveis.
        </TextPage>
        <TextPage align={false}>
          Sou apaixonada por leitura — ela me inspira a ser uma profissional
          mais criativa, focada e humana. Estou pronta para trocar ideias,
          colaborar e crescer junto com pessoas incríveis na área.
        </TextPage>

        <PhotoAndText>
          <ImageColumn>
            <TagName>Hey, There!</TagName>
            <ContainerImages>
              <Image src="images/fot_port2.png" />
            </ContainerImages>
          </ImageColumn>
          <TextColumn>
            <TextPage align={true}>
              Fico feliz por poder dividir um pouco da minha jornada. <br />
              Que possamos juntos construir novas possibilidades
            </TextPage>
            <ContainerSubtitle>
              <TextPage align={false}>Abraço,</TextPage>
              <TextPage align={false}>Rackel Rodrigues</TextPage>
            </ContainerSubtitle>
            <Buttondownload>
              <a href={Resume} download="Resume">
                <Svgdownload />
                Curriculo
              </a>
            </Buttondownload>
          </TextColumn>
        </PhotoAndText>
      </Container>
    </Background>
  );
};

export default AboutMe;
