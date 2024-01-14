import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Repo: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "repo") {
    window.open("https://github.com/hammad-mohi/cli-portfolio", "_blank");
  }

  return <span></span>;
};

export default Repo;
