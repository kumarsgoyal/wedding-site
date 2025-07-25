import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";


const Help: React.FC = () => {
  return (

    <HelpWrapper data-testid="help">

      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>

          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}

          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}

      <KeyContainer>
        <div>Tab or Ctrl + i&nbsp; =&gt; Auto Completes the command.</div>

        <div>Up Arrow {generateTabs(5)} =&gt; Go back to previous command.</div>
        <div>Ctrl + l {generateTabs(5)} =&gt; Clear the terminal.</div>
      </KeyContainer>
    </HelpWrapper>

  );
};

export default Help;
