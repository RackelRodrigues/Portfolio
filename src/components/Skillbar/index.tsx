import { Container, ImageTecn, Porcentage } from "./styles";

interface SkillbarProps {
  urlImage: string;
  imageAlt: string;
  percent: number;
  backgroundColor: string;
  ColorPercent: string;
}

const SkillBar = ({
  urlImage,
  imageAlt,
  percent,
  backgroundColor,
  ColorPercent,
}: SkillbarProps) => {
  return (
    <>
      <Container percentage={percent} colorPorcentage={ColorPercent}>
        <Porcentage BackgroundColor={backgroundColor}>
          <ImageTecn
            src={urlImage}
            alt={imageAlt}
            onError={(e) => {
              e.currentTarget.src = "/images/background.png";
            }}
          />
        </Porcentage>
      </Container>
    </>
  );
};

export default SkillBar;
