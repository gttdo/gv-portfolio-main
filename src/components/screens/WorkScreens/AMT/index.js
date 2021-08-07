import React from 'react';

import HeaderContentModule from '../../../core-ui/ContentModule/HeaderContentModule';

import AMTImg from '../../../../assets/works/AMT/casestudy_amt.png';

import TabContainer from './TabContainer';


const CaseStudyAMT = () => {
  return (
    <div className="CaseStudyAMT">
      <div className="flex flex-col-reverse mb-12 mt-12 md:flex-row">
        <HeaderContentModule
          addClass="md:w-2/4 md:mr-20"
          headerContent="The Asset Management Tool"
          headerTwoContent="An effective way for businesses to manage their inventory and provide to employees a quick access to it." />
        <div className="CaseStudyAMTContent_image-wrapper mb-12">
          <img src={AMTImg} alt="asset management tool" />
        </div>
      </div>
      <TabContainer />
    </div>
  )
}

export default CaseStudyAMT
