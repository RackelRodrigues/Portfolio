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
  description: string;
  languages: string[];
  repositoryLink: string;
  websiteLink: string;
  urlImage: string;
};

interface CardProps {
  data: CardData[];
}

const CardProject = ({ data }: CardProps) => {
  return (
    <>
      {data.map((project, id) => (
        <Container key={id}>
          <ImageProjct src={project.urlImage} alt="imageProject" />
          <div>
            <Nameproject>{project.projectName}</Nameproject>
            <Description>{project.description}</Description>
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
              Visitar
            </Button>
          </div>
        </Container>
      ))}
    </>
  );
};

export default CardProject;
