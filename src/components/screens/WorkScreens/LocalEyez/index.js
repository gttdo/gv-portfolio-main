import React from 'react';
import './styles.scss';

import FeaturedStory from '../../../core-ui/FeaturedProjects/FeaturedStory';
import LocalEyez from '../../../../assets/091021/project_card_bg/localeyez_card_bg.png';
import LocalEyezMobile from '../../../../assets/091021/project_card_bg/localeyez_card_bg_mobile.png';


import TabContainer from './TabContainer';


const CaseStudyAMT = () => {
  return (
    <div className="CaseStudy">
      <FeaturedStory
        bgImage={LocalEyez}
        mobileBgImage={LocalEyezMobile}
        alt="Localeyz mobile app"
        headline="LocalEyez"
        headlineMobile="LocalEyez"
        paragraphContent="An event planner design for people to explore and save events near them."
        caseStudyLink="/localeyez" />
      <div className="CaseStudy_content">
        <TabContainer />
      </div>


    </div >
  )
}

export default CaseStudyAMT
