import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

const SubOutcomesContent = () => {
  return (
    <>


      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="What We Learned"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; As a team, we learned that cooperation and communication are crucial at each step of the design process.
          </li>
          <li className="">&bull; We also learned how to effectively use storyboards as a tool to communicate our design to our clients and stakeholders.
          </li>
          <li className="">&bull; We leverage Maze to gathered data-driven insights from the usability test conducted.
          </li>
          <li className="">&bull; Rapid prototyping using Figma interactive components.
          </li>
          <li className="">&bull; Importance of accessibility tools like color contrast checker.
          </li>
        </ul>

      </div>

      <div className="story_03 mb-12">
        <BuiltIn
          subHeaderContent="Next Steps"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; Strategize on how to improve written content.</li>
          <li className="">&bull; Include an onboarding process</li>
          <li className="">&bull; Test prototype against other accessibility tools.</li>
        </ul>

      </div>
    </>
  )
}

export default SubOutcomesContent
