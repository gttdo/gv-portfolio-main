import React from 'react';


import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import HMImg01 from '../../../../../assets/091021/case_study_magi/usability_test/magi_heat_map_1.png';
import HMImg02 from '../../../../../assets/091021/case_study_magi/usability_test/magi_heat_map_2.png';
import HMImg03 from '../../../../../assets/091021/case_study_magi/usability_test/magi_heat_map_3.png';
import HMImg04 from '../../../../../assets/091021/case_study_magi/usability_test/magi_heat_map_4.png';

import PrototypeV2 from '../../../../../assets/091021/case_study_magi/prototype_revision/magi_revision.png';



const Deliver = () => {
  return (
    <>
      <div className="story_01 mb-12">
        <BuiltIn
          subHeaderContent="Usability Test Findings"
          subHeaderClass="mb-4" />

        <ul className="story_01_list">
          <li>&bull; Some participants were having difficulty understanding the questions during the usability test.</li>
          <li>&bull; Most of the participants completed the tasks during the usability test.
          </li>
          <li>&bull; Most participants found the prototype easy to navigate.</li>
          <li>&bull; The average time that a participant took to accomplish a task was of 6.5 seconds.
          </li>
        </ul>
      </div>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Heat Map"
          subHeaderClass="mb-4" />

        <div className="mb-8">
          <div className="mb-12">
            <img src={HMImg01} alt="heatmap 1" />
          </div>
          <div className="mb-12">
            <img src={HMImg02} alt="heatmap 2" />
          </div>
          <div className="mb-12">
            <img src={HMImg03} alt="heatmap 3" />
          </div>
          <div className="mb-12">
            <img src={HMImg04} alt="heatmap 4" />
          </div>
        </div>
      </div>

      <div className="story_03">
        <BuiltIn
          subHeaderContent="MAGI PROTOTYPE V2"
          subHeaderClass="mb-4" />

        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={PrototypeV2}
          />
          <img className="mb-12" src={PrototypeV2} alt="prototype version 2" />
        </picture>
      </div>


    </>
  )
}

export default Deliver
