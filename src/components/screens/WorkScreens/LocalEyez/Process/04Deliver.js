import React from 'react';


import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import Prototype01 from '../../../../../assets/091021/case_study_localeyez/prototype/welcome_screen_localeyez.png';
import Prototype02 from '../../../../../assets/091021/case_study_localeyez/prototype/signin_screen_localeyez.png';
import Prototype03 from '../../../../../assets/091021/case_study_localeyez/prototype/dashboard_localeyez.png';



const Deliver = () => {
  return (
    <>
      <div className="story_01 mb-12">
        <BuiltIn
          subHeaderContent="Localeyez Version 1.0"
          subHeaderClass="mb-4" />

        <div className="content">
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Prototype01}
              />
              <img className="mb-12 w-2/4" src={Prototype01} alt="stye guide" />
            </picture>
          </div>
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Prototype02}
              />
              <img className="mb-12 w-2/4 ml-auto" src={Prototype02} alt="stye guide" />
            </picture>
          </div>
          <div className="mb-12">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Prototype03}
              />
              <img className="mb-12 w-4/6" src={Prototype03} alt="stye guide" />
            </picture>
          </div>
        </div>
      </div>

    </>
  )
}

export default Deliver
