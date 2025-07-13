import { Title } from "../../../styles/globalStyle";
import data from "../../../server/projects/data.json";
import CardProject from "../../CardProject";
import { Background, Container } from "./styles";

interface ProjectProps {
  id?: string;
  isEnglish: boolean;
}

const Projects = ({ id, isEnglish }: ProjectProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">
        {isEnglish ? "Projects" : "Projetos"}
      </Title>
      <Background>
        <CardProject data={data} isEnglish={isEnglish} />
      </Background>
    </Container>
  );
};

export default Projects;
