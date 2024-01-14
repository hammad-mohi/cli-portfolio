import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { UsageDiv } from "../styles/Output.styled";

const Sudo: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "sudo") {
    window.open("https://youtu.be/dQw4w9WgXcQ?si=GBNuF2jtXdFIa88e", "_blank");
  }

  return arg.length > 0 ? <UsageDiv>Usage: sudo</UsageDiv> : <span></span>;
};

export default Sudo;
