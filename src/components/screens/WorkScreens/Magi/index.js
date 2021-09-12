import React from 'react';
import './styles.scss';

import FeaturedStory from '../../../core-ui/FeaturedProjects/FeaturedStory';
import MagiBGDesktop from '../../../../assets/091021/project_card_bg/magi_card_bg.png';
import MagiBGMobile from '../../../../assets/091021/project_card_bg/magi_card_bg_mobile.png';



import TabContainer from './TabContainer';


const CaseStudyAMT = () => {
  return (
    <div className="CaseStudy">
      <FeaturedStory
        bgImage={MagiBGDesktop}
        mobileBgImage={MagiBGMobile}
        alt="Magi desktop app"
        headline="Magi"
        headlineMobile="Magi"
        paragraphContent="A desktop design solution for a subscription-based e-commerce platform that directly connects subscriber with sellers."
        caseStudyLink="/works/case-study-magi" />
      <div className="CaseStudy_content">
        <TabContainer />
      </div>


    </div>
  )
}

export default CaseStudyAMT
