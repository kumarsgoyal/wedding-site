import { Typewriter } from 'react-simple-typewriter'

import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const bride = import.meta.env.VITE_BRIDE_NAME;
const groom = import.meta.env.VITE_GROOM_NAME;


const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
    <div>
        Love is live — tying the knot forever 💍<br /><br />

        Welcome to the land of love, laughter, and lifelong commit`s!<br /><br />

        We're thrilled to share our special day with you, <br />
        and we can't wait to merge memories, laughter, and joy — with each of you in our story.<br /><br />

        We've compiled our story, pushed every beautiful moment to the same branch,<br />
        and now we're ready to run the most beautiful script of our lives.<br /><br />

        Suit up in your finest sherwanis and sarees,<br />
        because it's time to deploy joy, dance, and endless memories:<br /><br />

        <HighlightSpan>{groom} & {bride} — Forever ❤️</HighlightSpan><br /><br />
        
        From <code>CLI</code> to <code>DIY</code>, from code to ceremony — you're invited!<br /><br />

        <HighlightAlt>
          <Typewriter
            words={[`#${groom}Weds${bride}`]}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={0}
            delaySpeed={1500}
          />
        </HighlightAlt>
      </div>
    </AboutWrapper>
  );
};

export default About;
