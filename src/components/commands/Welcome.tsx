import {
  Cmd,
  HeroContainer,
  Seperator,
} from "../styles/Welcome.styled";


const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
      <Seperator>----</Seperator>
      <div>
        💌 Surprise — this this isn't a pull request... it's a wedding invite!<br /><br />
      </div>
        <Seperator>----</Seperator>
        <div>
        To access a list of available commands, simply enter `<Cmd>help</Cmd>`.
        </div>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
