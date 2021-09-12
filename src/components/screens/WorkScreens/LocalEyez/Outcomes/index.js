import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

const SubOutcomesContent = () => {
  return (
    <>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Guerilla Test Findings"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; 100% of participants successfully navigated to their dashboard.
          </li>
          <li className="">&bull; 100% of participants successfully completed the onboarding process.
          </li>
          <li className="">&bull; Most participants used the assistance button to access their settings.
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
          <li className="">&bull; Test for accessibility (color contrast, alt tags for images, etc)</li>
        </ul>

      </div>


      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="What We Learned"
          subHeaderClass="mb-4" />

        <ul className="mb-2">
          <li className="">&bull; The importance of interaction design and how to drive users to achieve their goals with our application.
          </li>
          <li className="">&bull; Color contrast and accessibility are crucial to the design process.
          </li>
          <li className="">&bull; Leverage using components in Figma for rapid prototyping.
          </li>
          <li className="">&bull; Competitive analysis can guide the direction of our initial layouts.
          </li>
        </ul>

      </div>


    </>
  )
}

export default SubOutcomesContent
