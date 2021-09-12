import React from 'react';

import HeroImg from '../../../assets/hero_2x.jpg';
import ProfilePic from '../../../assets/091021/profile_pic/profile_pic_v2.png';
import ContentModule from '../../core-ui/ContentModule/ContentModule';
import DetailedContentModule from '../../core-ui/ContentModule/DetailedContentModule';
import FixedButton from '../../core-ui/Button/FixedButton';
import FixedButtonLink from '../../core-ui/Button/FixedButtonLink';

import FeaturedStory from '../../core-ui/FeaturedProjects/FeaturedStory';

import MagiBGDesktop from '../../../assets/091021/project_card_bg/magi_card_bg.png';
import MagiBGMobile from '../../../assets/091021/project_card_bg/magi_card_bg_mobile.png';
import LocalEyez from '../../../assets/091021/project_card_bg/localeyez_card_bg.png';
import LocalEyezMobile from '../../../assets/091021/project_card_bg/localeyez_card_bg_mobile.png';
import AMT from '../../../assets/091021/project_card_bg/amt_card_bg.png';
import AMTMobile from '../../../assets/091021/project_card_bg/amt_card_bg_mobile.png';
import BusApp from '../../../assets/091021/project_card_bg/busup_card_bg.png';
import BusAppMobile from '../../../assets/091021/project_card_bg/busup_card_bg_mobile.png';



const HomeScreen = () => {

  return (
    <div className="HomeScreen">
      <div className="story_02 flex flex-row-reverse justify-between mb-28 md:flex-row ">
        <div className="HomeScreen_profile--wrapper hidden md:block md:w-full">
          <img className="w-full" src={ProfilePic} alt="Gerardo Vinces" />
        </div>
        <div className="content">
          <DetailedContentModule
            addClass="ml-auto"
            headerContent="Hi, I'm Gerardo!"
            paragraphContent="I'm a UX Designer based in San Francisco, CA and I enjoy creating amazing digital experiences for global consumers with an acute focus in accessibility, competitive analysis, usability and customer journeys."
            topParagraphClasses="md:block"
            addParagraphContent=""
            secondParagraphClasses="hidden" />
          <div className="cta-content flex flex-column md:flex-row ml-auto">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13IFsArrqFIHCbD4-Yw88XhroAWRsdVdq/view?usp=sharing"><FixedButton addClass="mr-6 mb-4 md:mb-0 full-width md:regular-width" variant="red" textContent="VIEW CV" /></a>

            <FixedButtonLink addClass="full-width md:regular-width" variant="inverse" textContent="LEARN MORE" linkTo="/about" />
          </div>
        </div>
      </div>

      <div className="story_02-5" id="featuredProjects">
        <h2 className="mb-12 story_headers">FEATURED PROJECTS</h2>

      </div>
      <FeaturedStory
        bgImage={MagiBGDesktop}
        mobileBgImage={MagiBGMobile}
        alt="Magi desktop app"
        headline="Magi"
        headlineMobile="Magi"
        paragraphContent="A desktop design solution for a subscription-based e-commerce platform that directly connects subscriber with sellers."
        caseStudyLink="/magi" />

      <FeaturedStory
        bgImage={LocalEyez}
        mobileBgImage={LocalEyezMobile}
        alt="Localeyz mobile app"
        headline="LocalEyez"
        headlineMobile="LocalEyez"
        paragraphContent="An event planner design for people to explore and save events near them."
        caseStudyLink="/localeyez" />

      <FeaturedStory
        bgImage={AMT}
        mobileBgImage={AMTMobile}
        alt="asset management app"
        headline="Asset Management Tool"
        headlineMobile="AMT"
        paragraphContent="A mobile design solution for an inventory management application for enterprise level organizations."
        caseStudyLink="/amt" />

      <FeaturedStory
        bgImage={BusApp}
        mobileBgImage={BusAppMobile}
        alt="bus app"
        headline="Bus App"
        headlineMobile="Bus App"
        paragraphContent="A mobile app design solution to keep bus riders updated on the schedules and changes with their local transit agencies"
        caseStudyLink="/busup" />


      <div className="story_01 flex flex-col-reverse mb-28 md:flex-row  md:justify-center">
        <div className="content">
          <ContentModule
            addClass="mb-6"
            headerContent="Building "
            highlightText="Digital "
            secondHeaderContent="Products, Brands and Experiences."
            paragraphContent="UX & UI Desiger with a deep passion in accessible design and acute focus and expertise on the customer journey, usability and user interface."

            paragraphContentClass="mb-4" />
          <div className="HomeScreen_form--content ">
            <FixedButtonLink addClass="full-width md:regular-width" textContent="Let's Connect" variant="red" linkTo="/contact" />

          </div>
        </div>
        <div className="HomeScreen_spotlight--wrapper">
          <img className="w-full" src={HeroImg} alt="designer tools" />
        </div>

      </div>

    </div >
  )
}

export default HomeScreen
