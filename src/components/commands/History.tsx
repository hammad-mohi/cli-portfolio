import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const History: React.FC = () => {
  const { history, index } = useContext(termContext);
  const currentHistory = _.reverse(_.slice(history, index));

  return (
    <Wrapper data-testid="history">
      {currentHistory.map((cmd, index) => (
        <div key={_.uniqueId(`${cmd}_`)}>
          {index}. {cmd}
        </div>
      ))}
    </Wrapper>
  );
};

export default History;
