import { Title } from "../../../styles/globalStyle";
import CardFigma from "../../CardProjectFig";
import data from "../../../server/figma-Projects/data.json";
import { Background, Container } from "./styles";

interface ProjectsFigmaProps {
  id?: string;
}

const ProjectsFigma = ({ id }: ProjectsFigmaProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">Projects on Figma</Title>
      <Background>
        <CardFigma data={data} />
      </Background>
    </Container>
  );
};

export default ProjectsFigma;
