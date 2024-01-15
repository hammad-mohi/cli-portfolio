import { WorkIntro, WorkList } from "../styles/Work.styled";
import { Wrapper } from "../styles/Output.styled";
import { FaExternalLinkAlt } from "react-icons/fa";

const Work: React.FC = () => {
  return (
    <Wrapper data-testid="work">
      <WorkIntro>Here is my work experience:</WorkIntro>
      {workBg.map(({ title, desc, link, loc, dates }) => (
        <WorkList key={title}>
          <div className="title">{title}</div>
          <div className="desc">
            <a href={link} target="_blank" rel="noreferrer noopener">
              {desc}{" "}
              <FaExternalLinkAlt size={12} style={{ display: "inline" }} />
            </a>
          </div>
          <div className="loc">{loc}</div>
          <div className="dates">{dates}</div>
        </WorkList>
      ))}
    </Wrapper>
  );
};

const workBg = [
  {
    title: "Senior Cloud Engineer",
    desc: "Tenstorrent",
    link: "https://www.tenstorrent.com",
    loc: "Santa Clara, California, USA",
    dates: "February 2023 - Now",
  },
  {
    title: "Systems Engineer",
    desc: "Tenstorrent",
    link: "https://www.tenstorrent.com",
    loc: "Toronto, Ontario, Canada",
    dates: "May 2021 - January 2023",
  },
  {
    title: "Software Development Engineering (SDE) Intern",
    desc: "Amazon",
    link: "https://www.amazon.com",
    loc: "Vancouver, British Columbia, Canada (Remote)",
    dates: "June - August 2020",
  },
  {
    title: "Systems Engineering Intern",
    desc: "Advanced Micro Devices (AMD)",
    link: "https://www.amd.com",
    loc: "Markham, Ontario, Canada",
    dates: "May 2019 - April 2020",
  },
];

export default Work;
