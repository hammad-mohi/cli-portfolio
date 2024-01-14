import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Hammad Mohiuddin</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a senior cloud engineer</HighlightAlt> based in
        Silicon Valley, USA.
      </p>
      <p>
        I am passionate about developing applications to solve real-world
        problems.
      </p>
    </AboutWrapper>
  );
};

export default About;
