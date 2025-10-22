import { Title } from "../../../styles/globalStyle";
import SkillBar from "../../Skillbar";
import { Container, ContainerSkills } from "./styles";

interface MySkillsProps {
  id?: string;
  isEnglish: boolean;
}

const MySkills = ({ id, isEnglish }: MySkillsProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">
        {isEnglish ? "Skills" : "Habilidades"}
      </Title>

      <ContainerSkills>
        <SkillBar
          urlImage="/images/Skills/html.png"
          imageAlt="html"
          backgroundColor="#40170C"
          percent={85}
          ColorPercent="#E44F26"
        />
        <SkillBar
          urlImage="/images/Skills/css.png"
          imageAlt="css"
          backgroundColor="#0B141C"
          percent={87}
          ColorPercent="#1572B6"
        />
        <SkillBar
          urlImage="/images/Skills/Javascript.png"
          imageAlt="Javascript"
          backgroundColor="#333109"
          percent={80}
          ColorPercent="#F7DF1E"
        />
        <SkillBar
          urlImage="/images/Skills/react.png"
          imageAlt="react"
          backgroundColor="#082435"
          percent={90}
          ColorPercent="#00D8FF"
        />
        <SkillBar
          urlImage="/images/Skills/typescript.png"
          imageAlt="typescript"
          backgroundColor="#022538"
          percent={80}
          ColorPercent="#0A89DD"
        />
        <SkillBar
          urlImage="/images/Skills/next.png"
          imageAlt="next"
          backgroundColor="#cacaca"
          percent={40}
          ColorPercent="#000"
        />
        <SkillBar
          urlImage="/images/Skills/python.png"
          imageAlt="python"
          backgroundColor="#082435"
          percent={45}
          ColorPercent="#326B9B"
        />
        <SkillBar
          urlImage="/images/Skills/figma.png"
          imageAlt="figma"
          backgroundColor="#26152E"
          percent={56}
          ColorPercent="#8247CC"
        />
        <SkillBar
          urlImage="/images/Skills/flaskpy.png"
          imageAlt="flask python"
          backgroundColor="#cacaca"
          percent={40}
          ColorPercent="#000"
        />
        <SkillBar
          urlImage="/images/Skills/jest.png"
          imageAlt="jest"
          backgroundColor="#40170C"
          percent={50}
          ColorPercent="#C63D14"
        />
        <SkillBar
          urlImage="/images/Skills/cypress.png"
          imageAlt="cypress"
          backgroundColor="#d3d3d3"
          percent={65}
          ColorPercent="#007780"
        />
      </ContainerSkills>
    </Container>
  );
};

export default MySkills;
