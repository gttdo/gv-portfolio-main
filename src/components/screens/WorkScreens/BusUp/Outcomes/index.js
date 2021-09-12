import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

const SubOutcomesContent = () => {
  return (
    <>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Usability Test Findings"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; Designed an interactive mobile application for bus riders to check bus schedules, find their bus stop and obtain directions.
          </li>
          <li className="">&bull; Created a reusable style guide for future development of the application.
          </li>
          <li className="">&bull; Increased brand awareness by introducing a early product version to participants.
          </li>
        </ul>

      </div>

      <div className="story_03 mb-12">
        <BuiltIn
          subHeaderContent="Next Steps"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; Use user feedback to make prototype revisions.
          </li>
          <li className="">&bull; If possible, conduct a second round of usability testing.</li>
          <li className="">&bull; Test for accessibility</li>
        </ul>

      </div>


      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="What We Learned"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; Although we were able to conduct research and gather significant data within one week, the project can benefit from a longer period of research.
          </li>
          <li className="">&bull; Collaboration with other designers and team members is crucial and beneficial to the project.
          </li>
          <li className="">&bull; Keep business requirements and users’ needs a priority throughout the design process.
          </li>
        </ul>

      </div>


    </>
  )
}

export default SubOutcomesContent
