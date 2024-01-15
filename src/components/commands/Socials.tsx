import { useContext, useEffect } from "react";
import { ProjectsIntro } from "../styles/Projects.styled";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
import {
  checkRedirect,
  generateTabs,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import { termContext } from "../Terminal";
import Usage from "../Usage";
import { FaExternalLinkAlt } from "react-icons/fa";

const Socials: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "socials")) {
      socials.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="socials" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="socials">
      <ProjectsIntro>Here are my social links</ProjectsIntro>
      {socials.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>
            -{" "}
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {url}{" "}
              <FaExternalLinkAlt size={12} style={{ display: "inline" }} />
            </a>
          </CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="socials" marginY />
    </HelpWrapper>
  );
};

const socials = [
  {
    id: 1,
    title: "GitHub",
    url: "https://github.com/hammad-mohi",
    tab: 3,
  },
  {
    id: 2,
    title: "Dev.to",
    url: "https://dev.to/hammadmohi",
    tab: 3,
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://linkedin.com/in/hammad-mohiuddin",
    tab: 1,
  },
];

export default Socials;
