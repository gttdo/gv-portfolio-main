import React from 'react';

import ProfilePic from '../../../assets/profile_pic.jpg';
import DetailedContentModule from '../../core-ui/ContentModule/DetailedContentModule';
import FixedButton from '../../core-ui/Button/FixedButton';

const AboutScreen = () => {
  return (
    <div className="AboutScreen">
      <div className="story_02 flex flex-col justify-between mb-28 md:flex-row-reverse ">
        <div className="AboutScreen_profile--wrapper mx-auto md:mx-0 mb-8 md:mb-0">
          <img className="mx-auto rounded-full md:rounded-none" src={ProfilePic} alt="Gerardo Vinces" />
        </div>
        <div className="content md:mb-40">
          <DetailedContentModule
            addClass="ml-auto md:ml-0 w-full md:w-10/12"
            headerContent="Hi, I'm Gerardo."
            paragraphContent="I'm a UX Designer who enjoys creating amazing digital experiences for global consumers with an acute focus in accessibility, competitive analysis, usability and customer journeys. My previous background in Frontend Development has allowed me to work in cross-functional teams across the tech, legal and pet services industry."
            addParagraphContent="When I'm not designing multiple iterations of a new project, you can find me hanging out with my two 4-year old labs and playing unhealthy amounts of D&D."
            secondParagraphClasses="mb-8" />
          <div className="cta-content flex">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13IFsArrqFIHCbD4-Yw88XhroAWRsdVdq/view?usp=sharing"><FixedButton addClass="mr-6" variant="red" textContent="VIEW CV" /></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen
