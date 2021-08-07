import React from 'react';
import { Link } from 'react-router-dom';

import HeroImg from '../../../assets/hero_2x.jpg';
import ProfilePic from '../../../assets/profile_pic.jpg';
import ContentModule from '../../core-ui/ContentModule/ContentModule';
import DetailedContentModule from '../../core-ui/ContentModule/DetailedContentModule';
import FixedButton from '../../core-ui/Button/FixedButton';
import FixedButtonLink from '../../core-ui/Button/FixedButtonLink';

import Thumb01 from '../../../assets/works/wcd_demo_large.jpg';
import Thumb02 from '../../../assets/works/busup_demo_large.jpg';
import Thumb03 from '../../../assets/works/localeyez_demo2.jpg';



const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="story_02 flex flex-row-reverse justify-between mb-28 md:flex-row ">
        <div className="HomeScreen_profile--wrapper hidden md:block">
          <img className="w-full" src={ProfilePic} alt="Gerardo Vinces" />
        </div>
        <div className="content">
          <DetailedContentModule
            addClass="ml-auto"
            spanContent="who is gerardo vinces"
            headerContent="Hi, I'm Gerardo!"
            paragraphContent="I'm a UX Designer based in San Francisco, CA and I enjoy creating amazing digital experiences for global consumers with an acute focus in accessibility, competitive analysis, usability and customer journeys."
            topParagraphClasses="md:block"
            addParagraphContent=""
            secondParagraphClasses="hidden" />
          <div className="cta-content flex ml-auto">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13IFsArrqFIHCbD4-Yw88XhroAWRsdVdq/view?usp=sharing"><FixedButton addClass="mr-6" variant="red" textContent="VIEW CV" /></a>

            <FixedButtonLink variant="inverse" textContent="LEARN MORE" linkTo="/about" />
          </div>
        </div>
      </div>

      <div className="story_01 flex flex-col-reverse mb-28 md:flex-row  md:justify-center">
        <div className="content">
          <ContentModule
            addClass="mb-6"
            headerContent="Unique "
            highlightText="Design "
            secondHeaderContent="& Stylish Brand Perception"
            paragraphContent="UX & UI Desiger with a deep passion in accessible design and acute focus and expertise on the customer journey, usability and user interface."

            paragraphContentClass="mb-4" />
          <div className="HomeScreen_form--content ">
            <FixedButtonLink textContent="Let's Connect" variant="red" linkTo="/contact" />

          </div>
        </div>
        <div className="HomeScreen_spotlight--wrapper">
          <img className="w-full rounded-2xl" src={HeroImg} alt="designer tools" />
        </div>

      </div>



      <div className="story_03">
        <ContentModule addClass="mb-9" headerContent="Projects" />
        <div className="content flex flex-nowrap justify-evenly HomeScreen_recent--wrapper">
          <div className="md:mr-4 HomeScreen_recent md:mb-8">
            <Link to="/works/case-study-amt">
              <img className="md:m-auto md:w-full" src={Thumb01} alt="mobile app: asset management tool" />
              <p className="mt-8 text-center text-xl font-medium">Asset Management Tool</p>
              <p className="text-center text-xl">An inventory management tool</p>
            </Link>
          </div>
          <div className="md:mx-4 HomeScreen_recent relative">
            <img className="md:m-auto md:w-full md:opacity-30" src={Thumb02} alt="mobile app: bus up application" />
            <p className="mt-8 text-center text-xl font-medium md:opacity-30">Bus Up</p>
            <p className="text-center text-xl md:opacity-30">Commuter app for schedules, routes and stops.</p>
            <span className="coming-soon-flag">COMING SOON</span>
          </div>
          <div className="md:ml-4 HomeScreen_recent relative">
            <img className="md:m-auto md:w-full md:opacity-30" src={Thumb03} alt="mobile app: localeyez. Comming Soon." />
            <p className="mt-8 text-center text-xl font-medium md:opacity-30">LocalEyez</p>
            <p className="text-center text-xl md:opacity-30">An event planner application.</p>
            <span className="coming-soon-flag">COMING SOON</span>
          </div>
        </div>
        <div className="story_03--link-wrapper">
          <FixedButtonLink textContent="VIEW ALL" variant="red" linkTo="/works" />
        </div>
      </div>

    </div >
  )
}

export default HomeScreen
