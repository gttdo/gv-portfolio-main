import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import SWOTGraph from '../../../../../assets/091021/case_study_magi/competitive_analysis/magi_competitive_analysis.png';


import UserPersonaDesktop from '../../../../../assets/091021/case_study_magi/personas/magi_persona_Julieta_Herrera.png';
import UserPersonaDesktop2 from '../../../../../assets/091021/case_study_magi/personas/magi_persona_Mary_Gunlao.png';

const Discover = () => {
  return (
    <>
      <div className="story_01 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="Competitive Analysis"
          subHeaderClass="mb-4"
          paragraphContent="We conducted a thorough SWOT analysis on the following competitors, asset Barkbox, Cratejoy, Blue Apron, and Stitch Fix"
        />

        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={SWOTGraph}
          />
          <img src={SWOTGraph} alt="Asset Panda: Strengths: Available across platforms. Weaknesses: Too complex. Lack onboarding. Opportunities: Applicable for any industry. Threats: Market Saturation. Fishbowl: Strengths: Support team. Notifications. Weaknesses: Non intuitive. Opportunities: Modern design trend. Threats: Competitors with similar features. Reftab: Strengths: Upload inventory. Weaknesses: Lack responsive design. Opportunities: High demand. Threats: Free demo." />
        </picture>


        <div className="story_02 mb-4 md:mb-24">
          <BuiltIn
            subHeaderContent="User Persona"
            subHeaderClass="mb-4" />

          <div className="mb-24">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UserPersonaDesktop}
              />
              <img className="w-full" src={UserPersonaDesktop} alt="User Persona: Julieta Herrera" />
            </picture>
          </div>
          <div className="mb-4">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UserPersonaDesktop2}
              />
              <img className="w-full" src={UserPersonaDesktop2} alt="Gunlao" />
            </picture>
          </div>
        </div>




      </div>
    </>
  )

}

export default Discover;
