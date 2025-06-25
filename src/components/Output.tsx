import About from "./commands/About";
import Programme from "./commands/programme"
import Clear from "./commands/Clear";
import GeneralOutput from "./commands/GeneralOutput";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import History from "./commands/History";
import Themes from "./commands/Themes";


import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["projects", "socials", "themes", "echo"];

  // return 'Usage: <cmd>' if command arg is not valid

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          programme: <Programme />,
          clear: <Clear />,
          help: <Help />,
          history: <History />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>~$guest</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
