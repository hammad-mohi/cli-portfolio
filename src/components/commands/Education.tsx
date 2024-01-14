import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="edu">
      <EduIntro>Here is my educational background:</EduIntro>
      {eduBg.map(({ title, desc, link, loc, dates }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">
            <a href={link} target="_blank" rel="noreferrer noopener">
              {desc}{" "}
            </a>
          </div>
          <div className="loc">{loc}</div>
          <div className="dates">{dates}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BASc, Electrical & Computer Engineering",
    desc: "University of Toronto",
    link: "https://www.utoronto.ca",
    loc: "Toronto, Ontario, Canada",
    dates: "2016 - 2021",
  },
  {
    title: "Secondary School (Grades 11 - 12)",
    desc: "Sinclair Secondary School",
    link: "https://sinclairss.ddsb.ca/",
    loc: "Whitby, Ontario, Canada",
    dates: "2015 - 2016",
  },
  {
    title: "Secondary School (Grades 7 - 10)",
    desc: "Fazaia Inter College",
    link: "https://fazaia.edu.pk/ficmalir/home",
    loc: "Malir Cantt, Karachi, Pakistan",
    dates: "2010 - 2014",
  },
  {
    title: "Primary School (Grades 5 - 6)",
    desc: "Saint Aidan's Catholic Primary School",
    link: "https://www.st-aidans.co.uk",
    loc: "Wythenshawe, Manchester, UK",
    dates: "2009 - 2010",
  },
  {
    title: "Primary School (Grades 3 - 5)",
    desc: "Plymouth Grove Primary School",
    link: "http://www.plymouthgrove.net/",
    loc: "Manchester, UK",
    dates: "2007 - 2009",
  },
];

export default Education;
