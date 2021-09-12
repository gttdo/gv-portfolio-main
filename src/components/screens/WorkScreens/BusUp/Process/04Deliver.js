import React from 'react';


import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import UsabilityTestResult01 from '../../../../../assets/091021/case_study_bus_up/usability_test/bus_up_usability_test_result_1.png';
import UsabilityTestResult02 from '../../../../../assets/091021/case_study_bus_up/usability_test/bus_up_usability_test_result_2.png';
import UsabilityTestResult03 from '../../../../../assets/091021/case_study_bus_up/usability_test/bus_up_usability_test_result_3.png';
import UsabilityTestResult04 from '../../../../../assets/091021/case_study_bus_up/usability_test/bus_up_usability_test_result_4.png';

import Revision01 from '../../../../../assets/091021/case_study_bus_up/prototype_revisions/bus_up_revision_1.png';
import Revision02 from '../../../../../assets/091021/case_study_bus_up/prototype_revisions/bus_up_revision_2.png';
import Revision03 from '../../../../../assets/091021/case_study_bus_up/prototype_revisions/bus_up_revision_3.png';


const Deliver = () => {
  return (
    <>
      <div className="story_01 mb-12">
        <BuiltIn
          subHeaderContent="Usability Test Findings"
          subHeaderClass="mb-4" />

        <div className="content">
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UsabilityTestResult01}
              />
              <img className="mb-12" src={UsabilityTestResult01} alt="stye guide" />
            </picture>
          </div>
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UsabilityTestResult02}
              />
              <img className="mb-12" src={UsabilityTestResult02} alt="stye guide" />
            </picture>
          </div>
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UsabilityTestResult03}
              />
              <img className="mb-12" src={UsabilityTestResult03} alt="stye guide" />
            </picture>
          </div>
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={UsabilityTestResult04}
              />
              <img className="mb-12" src={UsabilityTestResult04} alt="stye guide" />
            </picture>
          </div>
        </div>
      </div>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Revisions"
          subHeaderClass="mb-4" />

        <div className="mb-8">
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Revision01}
              />
              <img className="mb-12" src={Revision01} alt="stye guide" />
            </picture>
          </div>
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Revision02}
              />
              <img className="mb-12" src={Revision02} alt="stye guide" />
            </picture>
          </div>
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Revision03}
              />
              <img className="mb-12" src={Revision03} alt="stye guide" />
            </picture>
          </div>
        </div>
      </div>


    </>
  )
}

export default Deliver
