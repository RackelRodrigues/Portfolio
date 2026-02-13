import { Title } from "../../../styles/globalStyle";
import CardFigma from "../../CardProjectFig";
import data from "../../../server/figma-Projects/data.json";
import { Background, Container } from "./styles";
import { motion } from "framer-motion";

interface ProjectsFigmaProps {
  id?: string;
  isEnglish?: boolean;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectsFigma = ({ id, isEnglish }: ProjectsFigmaProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">
        {isEnglish ? "Projects on Figma" : "Projetos no Figma"}
      </Title>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={item}>
          <Background>
            <CardFigma data={data} isEnglish={isEnglish} />
          </Background>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default ProjectsFigma;
