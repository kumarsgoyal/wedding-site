import { Typewriter } from 'react-simple-typewriter'

import {
  ProgrammeWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/Programme.styled";

const bride = import.meta.env.VITE_BRIDE_NAME;
const groom = import.meta.env.VITE_GROOM_NAME;


const Programme: React.FC = () => {
  return (
    <ProgrammeWrapper data-testid="programme">
      <p>
        You're warmly invited to celebrate the wedding of <HighlightSpan> {groom} and {bride} </HighlightSpan>
      </p>

      <p>
        With <HighlightAlt>immense joy and love</HighlightAlt>, we invite you to be a part of this beautiful journey.
      </p>

      <p>
        Please join us as we exchange vows and begin a new chapter together. <br />
        Your presence will make our day truly special. <br /><br />

        <HighlightAlt>💛 {import.meta.env.VITE_HALDI_MEHNDI_TITLE}</HighlightAlt><br />
        <HighlightAlt>📅</HighlightAlt> {import.meta.env.VITE_HALDI_MEHNDI_DATE}<br />
        <HighlightAlt>⏰</HighlightAlt> {import.meta.env.VITE_HALDI_MEHNDI_TIME}<br />
        <HighlightAlt>📍</HighlightAlt> {import.meta.env.VITE_HALDI_MEHNDI_VENUE}<br /><br />

        <HighlightAlt>🎶 {import.meta.env.VITE_DJ_TITLE}</HighlightAlt><br />
        <HighlightAlt>📅</HighlightAlt> {import.meta.env.VITE_DJ_DATE}<br />
        <HighlightAlt>⏰</HighlightAlt> {import.meta.env.VITE_DJ_TIME}<br />
        <HighlightAlt>📍</HighlightAlt> {import.meta.env.VITE_DJ_VENUE}<br /><br />

        <HighlightAlt>🌸 {import.meta.env.VITE_WEDDING_TITLE}</HighlightAlt><br />
        <HighlightAlt>📅</HighlightAlt> {import.meta.env.VITE_WEDDING_DATE}<br />
        <HighlightAlt>⏰</HighlightAlt> {import.meta.env.VITE_WEDDING_TIME}<br />
        <HighlightAlt>📍</HighlightAlt> {import.meta.env.VITE_WEDDING_VENUE}<br /><br />
      
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
      </p>
    </ProgrammeWrapper>
  );
};

export default Programme;
