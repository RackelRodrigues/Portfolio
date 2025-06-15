import { Title } from "../../../styles/globalStyle";
import SkillBar from "../../Skillbar";
import { Container, ContainerSkills } from "./styles";

interface MySkillsProps {
  id?: string;
}

const MySkills = ({ id }: MySkillsProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">Skills</Title>

      <ContainerSkills>
        <SkillBar
          urlImage="/src/assets/images/Skills/html.png"
          backgroundColor="#40170C"
          percent={85}
          ColorPercent="#E44F26"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/css.png"
          backgroundColor="#0B141C"
          percent={87}
          ColorPercent="#1572B6"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/Javascript.png"
          backgroundColor="#333109"
          percent={80}
          ColorPercent="#F7DF1E"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/react.png"
          backgroundColor="#082435"
          percent={80}
          ColorPercent="#00D8FF"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/typescript.png"
          backgroundColor="#022538"
          percent={80}
          ColorPercent="#0A89DD"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/next.png"
          backgroundColor="#cacaca"
          percent={40}
          ColorPercent="#000"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/python.png"
          backgroundColor="#082435"
          percent={45}
          ColorPercent="#326B9B"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/figma.png"
          backgroundColor="#26152E"
          percent={56}
          ColorPercent="#8247CC"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/flaskpy.png"
          backgroundColor="#cacaca"
          percent={40}
          ColorPercent="#000"
        />
        <SkillBar
          urlImage="/src/assets/images/Skills/jest.png"
          backgroundColor="#40170C"
          percent={50}
          ColorPercent="#C63D14"
        />
      </ContainerSkills>
    </Container>
  );
};

export default MySkills;
