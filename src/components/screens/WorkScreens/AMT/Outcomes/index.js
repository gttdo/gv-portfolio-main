import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

const SubOutcomesContent = () => {
  return (
    <>
      <div className="story_01 mb-12">
        <BuiltIn
          subHeaderContent="Usability Test Findings"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; Some participants were having difficulty understanding the questions during the usability test.
          </li>
          <li className="">&bull; Most of the participants completed the tasks during the usability test.</li>
          <li className="">&bull; Most participants found the prototype easy to navigate.</li>
          <li className="">&bull; The average time that a participant took to accomplish a task was of 6.5 seconds.</li>
        </ul>
      </div>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Next Steps"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; Use user feedback to make prototype revisions.</li>
          <li className="">&bull; If possible, conduct a second round of usability testing.</li>
          <li className="">&bull; Test for accessibility (color contrast, alt tags for images, etc)</li>
        </ul>
      </div>

      <div className="story_03 mb-12">
        <BuiltIn
          subHeaderContent="Lessons Learned"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; As a team, we learned that cooperation and communication are crucial at each step of the design process.
          </li>
          <li className="">&bull; We also learned how to effectively use storyboards as a tool to communicate our design to our clients and stakeholders.
          </li>
          <li className="">&bull; We leverage Maze to gathered data-driven insights from the usability test conducted.
          </li>
        </ul>

      </div>
    </>
  )
}

export default SubOutcomesContent
