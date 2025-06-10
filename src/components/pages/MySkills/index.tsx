import { Title } from "../../../styles/globalStyle";
import SkillBar from "../../Skillbar";
import { ContainerSkills } from "./styles";

const MySkills = () => {
  return (
    <>
      <Title variantColor="var(--secondary-color)">Skills</Title>

      <ContainerSkills>
        <SkillBar
          UrlImage="/src/assets/images/html.png"
          BackgroundColor="#40170C"
          percent={85}
          ColorPercent="#E44F26"
        />
        <SkillBar
          UrlImage="/src/assets/images/css.png"
          BackgroundColor="#0B141C"
          percent={87}
          ColorPercent="#1572B6"
        />
        <SkillBar
          UrlImage="/src/assets/images/Javascript.png"
          BackgroundColor="#333109"
          percent={80}
          ColorPercent="#F7DF1E"
        />
        <SkillBar
          UrlImage="/src/assets/images/react.png"
          BackgroundColor="#082435"
          percent={80}
          ColorPercent="#00D8FF"
        />
        <SkillBar
          UrlImage="/src/assets/images/typescript.png"
          BackgroundColor="#022538"
          percent={80}
          ColorPercent="#0A89DD"
        />
        <SkillBar
          UrlImage="/src/assets/images/next.png"
          BackgroundColor="#cacaca"
          percent={40}
          ColorPercent="#000"
        />
        <SkillBar
          UrlImage="/src/assets/images/python.png"
          BackgroundColor="#082435"
          percent={45}
          ColorPercent="#326B9B"
        />
        <SkillBar
          UrlImage="/src/assets/images/figma.png"
          BackgroundColor="#26152E"
          percent={56}
          ColorPercent="#8247CC"
        />
        <SkillBar
          UrlImage="/src/assets/images/flaskpy.png"
          BackgroundColor="#cacaca"
          percent={40}
          ColorPercent="#000"
        />
        <SkillBar
          UrlImage="/src/assets/images/jest.png"
          BackgroundColor="#40170C"
          percent={50}
          ColorPercent="#C63D14"
        />
      </ContainerSkills>
    </>
  );
};

export default MySkills;
