import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";


const History: React.FC = () => {

  const { history, index } = useContext(termContext);
  const currentHistory = [...history.slice(index)].reverse();



  return (

    <Wrapper data-testid="history">

      {currentHistory.map(cmd => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}

    </Wrapper>
  );
};

export default History;
