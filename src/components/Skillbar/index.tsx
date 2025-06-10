import { Container, ImageTecn, Porcentage } from "./styles";

interface SkillbarProps {
  UrlImage: string;
  percent: number;
  BackgroundColor: string;
  ColorPercent: string;
}

const SkillBar = ({
  UrlImage,
  percent,
  BackgroundColor,
  ColorPercent,
}: SkillbarProps) => {
  return (
    <>
      <Container percentage={percent} colorPorcentage={ColorPercent}>
        <Porcentage BackgroundColor={BackgroundColor}>
          <ImageTecn src={UrlImage} />
        </Porcentage>
      </Container>
    </>
  );
};

export default SkillBar;
