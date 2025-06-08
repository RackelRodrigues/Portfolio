import { Container, ImageTecn, Porcentage } from "./styles";

interface SkillbarProps {
  UrlImage: string;
  percent: number;
  BackgroundColor: string;
  ColorPercent: string;
}

const SkillBar = () => {
  return (
    <>
      <Container>
        <Porcentage>
          <ImageTecn src="/src/assets/images/html.png" alt="html" />
        </Porcentage>
      </Container>
    </>
  );
};

export default SkillBar;
