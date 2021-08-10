import React from 'react';

import ProfilePic from '../../../assets/profile_pic.jpg';
import FixedButton from '../../core-ui/Button/FixedButton';

const AboutScreen = () => {
  return (
    <div className="AboutScreen">
      <div className="story_02 flex flex-col justify-between mb-28 md:flex-row-reverse ">
        <div className="AboutScreen_profile--wrapper mx-auto md:mx-0 mb-8 md:mb-0">
          <img className="mx-auto mb-4 rounded-full md:rounded-none" src={ProfilePic} alt="Gerardo Vinces" />
          <div className="cta-content flex justify-center">
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/13IFsArrqFIHCbD4-Yw88XhroAWRsdVdq/view?usp=sharing"><FixedButton addClass="regular-width md:regular-width" variant="red" textContent="VIEW CV" /></a>

          </div>
        </div>
        <div className="content md:mb-40">
          <div className="ml-auto md:ml-0 w-full md:w-10/12">
            <h1 className="mb-8">Hi, I'm Gerardo</h1>
            <p className="mb-4">I’m a UX Researcher, Designer and Full Stack Developer from the San Francisco Bay Area.</p>
            <p className="mb-4">As far as I can remember, I have always had the innate curiosity on how things worked at an atomic level. My academic background in Microbiology, Chemistry and working as a Nuclear Field Electronics Technician in the U.S. Navy has fueled this curiosity where I was able to apply my research, analysis and problem-solving skills when I built software as a developer. As my interest pivoted to human-centric design and building a better user experience, I joined Thinkful as a UX/UI Designer to enhance these skill sets and to further my learning and professional development.</p>
            <p className="mb-4">In my time at Thinkful and being a life-long learner in Design and Development, I enjoyed discovering new design patterns, and exploring new and old design technology tools such as Maze, Figma, and Adobe Creative Suite and adding it to my tool agnostic toolbelt. Furthermore, I have learned to leverage my life-long interest in gaming and became fascinated with gamification, where typical elements, concepts and design solutions of game play (scoring, competition and rules of gameplay) are applied in an application to increase engagement! And lastly, I thoroughly enjoyed and appreciated working and collaborating with my cohort classmates, learning from their constructive critiques and their different perspectives in design.</p>
            <p className="mb-4">Prior to Thinkful, I created amazing digital experiences for global consumers in the tech, legal and pet services industry as a Full Stack Developer. This allowed me to get a keen eye for great UIs, seamless user experiences, and innovative design trends that helped hone my user research, competitive analysis and prototyping skills as a UX and UI Designer. My cross-functional background in design and development enables me to provide unique perspectives in solving critical business needs, practically and cost-effectively. </p>
            <p className="mb-4">During my free time, I’m an avid D&D Game Master where I design and develop captivating gameplays, and bring characters and stories to life. I spend hours preparing for a session where I design different “user flows”– encounters and various scenarios based on the decisions made by a player, and all possible with tabletop platforms like RollD20 and D&D Beyond where I’m still able to play virtually.</p>
            <p className="mb-8">Looking back, all my interests, my passion, and my skills from previous professional backgrounds led me to where I am today. Let me know if you want to work on a project together!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutScreen
