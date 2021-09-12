import React from 'react';
import './styles.scss';

import FeaturedStory from '../../../core-ui/FeaturedProjects/FeaturedStory';
import BusApp from '../../../../assets/091021/project_card_bg/busup_card_bg.png';
import BusAppMobile from '../../../../assets/091021/project_card_bg/busup_card_bg_mobile.png';


import TabContainer from './TabContainer';


const CaseStudyAMT = () => {
  return (
    <div className="CaseStudy">
      <FeaturedStory
        bgImage={BusApp}
        mobileBgImage={BusAppMobile}
        alt="bus app"
        headline="Bus App"
        headlineMobile="Bus App"
        paragraphContent="A mobile app design solution to keep bus riders updated on the schedules and changes with their local transit agencies"
        caseStudyLink="/works/case-study-busup" />
      <div className="CaseStudy_content">
        <TabContainer />
      </div>


    </div>
  )
}

export default CaseStudyAMT
