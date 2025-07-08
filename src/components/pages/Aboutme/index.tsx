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
import Resume from "../../../assets/images/_curriculo rackel.pdf";

interface AboutMeProps {
  id?: string;
}

const AboutMe = ({ id }: AboutMeProps) => {
  return (
    <Background id={id}>
      <Title variantColor="var(--background-color)">About Me</Title>
      <Container>
        <TextPage>
          Prazer! Sou <span>Rackel Rodrigues</span>, tenho 24 anos e curso
          Ciência da Computação na UEPB. Amo criar experiências digitais, e me
          encontrei no desenvolvimento web front-end
        </TextPage>
        <TextPage>
          Trabalho com HTML, CSS, JavaScript e ReactJS em projetos que me
          desafiam e me motivam a crescer. Também tenho conhecimentos em
          TypeScript e um pouco de Figma, o que me ajuda a pensar tanto no
          código quanto na experiência visual.
        </TextPage>
        <TextPage>
          Sou apaixonada por leitura — ela me inspira a ser uma profissional
          mais criativa, focada e humana. Estou pronta para trocar ideias,
          colaborar e crescer junto com pessoas incríveis na área.
        </TextPage>

        <PhotoAndText>
          <ImageColumn>
            <TagName>Hey, There!</TagName>
            <ContainerImages>
              <Image src="/src/assets/images/fot_port2.png" />
            </ContainerImages>
          </ImageColumn>
          <TextColumn>
            <TextPage>
              Agradeço por conhecer um pouco mais sobre mim. Será um prazer
              trocar experiências e criar oportunidades com pessoas incríveis!
            </TextPage>
            <ContainerSubtitle>
              <TextPage>Abraço,</TextPage>
              <TextPage>Rackel Rodrigues</TextPage>
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
