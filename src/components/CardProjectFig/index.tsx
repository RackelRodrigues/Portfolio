import { Button, Container, ContainerAll, Walpaper } from "./styles";

type CardData = {
  projectName: string;
  notionLink: string;
  figmaLink: string;
  urlImage: string;
};

interface CardProps {
  data: CardData[];
  isEnglish?: boolean;
}

const CardFigma = ({ data, isEnglish }: CardProps) => {
  return (
    <ContainerAll>
      {data.map((project, id) => (
        <Container key={id}>
          <Walpaper
            src={project.urlImage}
            onError={(e) => {
              e.currentTarget.src = "public/images/background.png";
            }}
          />
          <div className="buttonsContainer">
            <Button
              onClick={() =>
                window.open(project.notionLink, "_blank", "noopener,noreferrer")
              }
            >
              {isEnglish ? "View Notion" : "Visualizar Notion"}
            </Button>
            <Button
              onClick={() =>
                window.open(project.figmaLink, "_blank", "noopener,noreferrer")
              }
            >
              {isEnglish ? "View Design" : "Visualizar Design"}
            </Button>
          </div>
        </Container>
      ))}
    </ContainerAll>
  );
};

export default CardFigma;
