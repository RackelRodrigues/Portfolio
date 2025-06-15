import { Button, Container, ContainerAll, Walpaper } from "./styles";

type CardData = {
  projectName: string;
  notionLink: string;
  figmaLink: string;
  urlImage: string;
};

interface CardProps {
  data: CardData[];
}

const CardFigma = ({ data }: CardProps) => {
  return (
    <ContainerAll>
      {data.map((project, id) => (
        <Container key={id}>
          <Walpaper
            src={project.urlImage}
            onError={(e) => {
              e.currentTarget.src = "src/assets/images/background.png";
            }}
          />
          {/* <h3>{project.projectName}</h3> */}
          <div className="buttonsContainer">
            <Button> Visualizar Notion</Button>
            <Button>Visualizar Design</Button>
          </div>
        </Container>
      ))}
    </ContainerAll>
  );
};

export default CardFigma;
