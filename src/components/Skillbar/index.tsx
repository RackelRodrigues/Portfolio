import { Container, ImageTecn, Porcentage } from "./styles";

interface SkillbarProps {
  urlImage: string;
  percent: number;
  backgroundColor: string;
  ColorPercent: string;
}

const SkillBar = ({
  urlImage,
  percent,
  backgroundColor,
  ColorPercent,
}: SkillbarProps) => {
  return (
    <>
      <Container percentage={percent} colorPorcentage={ColorPercent}>
        <Porcentage BackgroundColor={backgroundColor}>
          <ImageTecn src={urlImage} />
        </Porcentage>
      </Container>
    </>
  );
};

export default SkillBar;
