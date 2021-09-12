import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import SWOTGraph from '../../../../../assets/091021/case_study_bus_up/competitive_analysis/competitive_analysis.png';


import UserPersona from '../../../../../assets/091021/case_study_bus_up/persona/Isabella_Lopez.png';
import UserJourney from '../../../../../assets/091021/case_study_bus_up/persona/Journey_Map.png';

const Discover = () => {
  return (
    <>
      <div className="story_01 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="Competitive Analysis"
          subHeaderClass="mb-4"
          paragraphContent="We conducted a thorough SWOT analysis on the following competitors, competitors, Google Maps, Citymapper, moovit."
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
                srcSet={UserPersona}
              />
              <img className="w-full" src={UserPersona} alt="User Persona: Julieta Herrera" />
            </picture>
          </div>
        </div>

        <div className="story_02 mb-4 md:mb-24">
          <BuiltIn
            subHeaderContent="User Journey"
            subHeaderClass="mb-4" />


          <div className="mb-4">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UserJourney}
              />
              <img className="w-full" src={UserJourney} alt="Gunlao" />
            </picture>
          </div>
        </div>




      </div>
    </>
  )

}

export default Discover;
