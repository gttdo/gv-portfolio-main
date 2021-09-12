import React from 'react';
import './styles.scss';

import FeaturedStory from '../../../core-ui/FeaturedProjects/FeaturedStory';
import AMT from '../../../../assets/091021/project_card_bg/amt_card_bg.png';
import AMTMobile from '../../../../assets/091021/project_card_bg/amt_card_bg_mobile.png';



import TabContainer from './TabContainer';


const CaseStudyAMT = () => {
  return (
    <div className="CaseStudy">
      <FeaturedStory
        bgImage={AMT}
        mobileBgImage={AMTMobile}
        alt="asset management app"
        headline="Asset Management Tool"
        headlineMobile="AMT"
        paragraphContent="A mobile design solution for an inventory management application for enterprise level organizations."
        caseStudyLink="/works/case-study-amt" />
      <div className="CaseStudy_content">
        <TabContainer />
      </div>


    </div>
  )
}

export default CaseStudyAMT
