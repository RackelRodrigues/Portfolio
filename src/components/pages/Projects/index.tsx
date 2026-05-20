import { Title } from "../../../styles/globalStyle";
import data from "../../../server/projects/data.json";
import CardProject from "../../CardProject";
import { Background, Container, BackgroundMotion } from "./styles";
import { motion } from "framer-motion";

interface ProjectProps {
  id?: string;
  isEnglish: boolean;
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

const Projects = ({ id, isEnglish }: ProjectProps) => {
  return (
    <Container id={id}>
      <Title variantColor="var(--secondary-color)">
        {isEnglish ? "Projects" : "Projetos"}
      </Title>

      <BackgroundMotion
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <Background>
            <CardProject data={data} isEnglish={isEnglish} />
          </Background>
        </motion.div>
      </BackgroundMotion>
    </Container>
  );
};

export default Projects;
