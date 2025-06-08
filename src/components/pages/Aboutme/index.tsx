import { Title } from "../../../styles/globalStyle";
import {
  Background,
  Buttondownload,
  Image,
  TagName,
  TextPage,
  Svgdownload,
  ImageEffect,
  ContainerImages,
} from "./styles";

const AboutMe = () => {
  return (
    <Background>
      <Title>About me</Title>
      <TextPage>
        I'm <span>Rackel Rodrigues</span>, a 24-year-old Computer Science
        student at the Universidade Estadual da Paraíba (UEPB). I'm passionate
        about web development, particularly in ReactJS.
      </TextPage>
      <TextPage>
        With solid skills in HTML, CSS, JavaScript, and ReactJS, I continuously
        enhance my abilities through coursework and personal projects.
        Additionally, I have a deep love for reading, as it fuels my personal
        and professional growth. I'm eager to contribute my knowledge and skills
        in a challenging and collaborative work environment, and I'm excited
        about the potential to make meaningful connections within the industry.
      </TextPage>
      <TextPage>
        Thank you for taking the time to learn a bit about me. Let's connect and
        explore potential opportunities together!
      </TextPage>
      <div>
        <div>
          <TagName>Hey, There!</TagName>
          <ContainerImages>
            <ImageEffect src="/src/assets/images/Vector.svg" />
            <Image src="/src/assets/images/perfil2.svg" />
          </ContainerImages>
        </div>

        <TextPage>Best regards,</TextPage>
        <TextPage>Rackel Rodrigues</TextPage>
        <Buttondownload>
          <Svgdownload />
          Resume
        </Buttondownload>
      </div>
    </Background>
  );
};

export default AboutMe;
