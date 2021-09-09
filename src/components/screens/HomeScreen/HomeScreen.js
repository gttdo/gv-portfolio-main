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
          <div className="cta-content flex flex-column md:flex-row ml-auto">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13IFsArrqFIHCbD4-Yw88XhroAWRsdVdq/view?usp=sharing"><FixedButton addClass="mr-6 mb-4 md:mb-0 full-width md:regular-width" variant="red" textContent="VIEW CV" /></a>

            <FixedButtonLink addClass="full-width md:regular-width" variant="inverse" textContent="LEARN MORE" linkTo="/about" />
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
            <FixedButtonLink addClass="full-width md:regular-width" textContent="Let's Connect" variant="red" linkTo="/contact" />

          </div>
        </div>
        <div className="HomeScreen_spotlight--wrapper">
          <img className="w-full rounded-2xl" src={HeroImg} alt="designer tools" />
        </div>

      </div>



      <div className="story_03">
        <div className="flex md:flex-row flex-col mb-16 md:items-center">
          <h1 className="mb-7">Projects</h1>
          <div className="w-full md:w-1/6"><Link className="hover:underline" to="/works"><span>View All `&gt;`</span></Link></div>
        </div>
        <div className="content flex flex-nowrap justify-between HomeScreen_recent--wrapper">
          <div className="md:mr-4 HomeScreen_recent md:mb-8 md:relative">
            <Link to="/works/case-study-amt">
              <img className="md:m-auto md:w-full" src={Thumb01} alt="mobile app: asset management tool" />
              <p className="mt-8 text-center text-xl font-medium">Asset Management Tool</p>
              <p className="text-center text-xl">An inventory management tool</p>
            </Link>
            <div className="story_03--link-wrapper">
              <FixedButtonLink addClass="regular-width md:regular-width md:mt-7" textContent="VIEW" variant="red" linkTo="/works/case-study-amt" />
            </div>
          </div>
          <div className="md:mx-4 HomeScreen_recent relative">
            <img className="md:m-auto md:w-full opacity-30" src={Thumb02} alt="mobile app: bus up application" />
            <p className="mt-8 text-center text-xl font-medium opacity-30">Bus Up</p>
            <p className="text-center text-xl opacity-30">Commuter app for schedules, routes and stops.</p>
            <div className="coming-soon-flag">COMING SOON</div>
            <div className="story_03--link-wrapper">
              <FixedButtonLink disabled addClass="regular-width md:regular-width disabled" textContent="VIEW" variant="gray" linkTo="/works" />
            </div>
          </div>
          <div className="md:ml-4 HomeScreen_recent relative">
            <img className="md:m-auto md:w-full opacity-30" src={Thumb03} alt="mobile app: localeyez. Comming Soon." />
            <p className="mt-8 text-center text-xl font-medium opacity-30">LocalEyez</p>
            <p className="text-center text-xl opacity-30">An event planner application.</p>
            <div className="coming-soon-flag">COMING SOON</div>
            <div className="story_03--link-wrapper">
              <FixedButtonLink disabled addClass="regular-width md:regular-width md:mt-7 disabled" textContent="VIEW" variant="gray" linkTo="/works" />
            </div>
          </div>
        </div>
      </div>

    </div >
  )
}

export default HomeScreen
