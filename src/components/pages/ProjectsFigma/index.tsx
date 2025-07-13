import { Title } from "../../../styles/globalStyle";
import CardFigma from "../../CardProjectFig";
import data from "../../../server/figma-Projects/data.json";
import { Background, Container } from "./styles";

interface ProjectsFigmaProps {
  id?: string;
  isEnglish?: boolean;
}

const ProjectsFigma = ({ id, isEnglish }: ProjectsFigmaProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">
        {isEnglish ? "Projects on Figma" : "Projetos no Figma"}
      </Title>
      <Background>
        <CardFigma data={data} isEnglish={isEnglish} />
      </Background>
    </Container>
  );
};

export default ProjectsFigma;
