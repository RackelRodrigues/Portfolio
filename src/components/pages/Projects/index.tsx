import { Title } from "../../../styles/globalStyle";
import data from "../../../server/projects/data.json";
import CardProject from "../../CardProject";
import { Background, Container } from "./styles";

interface ProjectProps {
  id?: string;
}

const Projects = ({ id }: ProjectProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">Projetos</Title>
      <Background>
        <CardProject data={data} />
      </Background>
    </Container>
  );
};

export default Projects;
