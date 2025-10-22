import {
  Container,
  ImageProjct,
  Nameproject,
  Description,
  Button,
  Linguages,
  ContainerTags,
} from "./styles";

type CardData = {
  projectName: string;
  languages: string[];
  repositoryLink: string;
  websiteLink: string;
  urlImage: string;
  imageAlt: string;
  description: {
    pt: string;
    en: string;
  };
};

interface CardProps {
  data: CardData[];
  isEnglish?: boolean;
}

const CardProject = ({ data, isEnglish }: CardProps) => {
  return (
    <>
      {data.map((project, id) => (
        <Container key={id}>
          <ImageProjct
            src={project.urlImage}
            alt={project.imageAlt}
            onError={(e) => {
              e.currentTarget.src = "public/images/background.png";
            }}
          />
          <div>
            <Nameproject>{project.projectName}</Nameproject>
            <Description>
              {isEnglish ? project.description.en : project.description.pt}
            </Description>
          </div>
          <ContainerTags>
            {project.languages.map((lang, index) => (
              <Linguages key={index}>{lang}</Linguages>
            ))}
          </ContainerTags>

          <div className="buttonsContainer">
            <Button
              Variante={1}
              as="a"
              href={project.repositoryLink}
              target="_blank"
            >
              Github
            </Button>
            <Button
              Variante={2}
              as="a"
              href={project.websiteLink}
              target="_blank"
            >
              {isEnglish ? "See Live" : "Visitar"}
            </Button>
          </div>
        </Container>
      ))}
    </>
  );
};

export default CardProject;
