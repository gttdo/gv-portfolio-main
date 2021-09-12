import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import UserFlow01 from '../../../../../assets/091021/case_study_magi/user_flows/magi_user_flow_1.png';
import UserFlow02 from '../../../../../assets/091021/case_study_magi/user_flows/magi_user_flow_2.png';
import SiteMap from '../../../../../assets/091021/case_study_magi/site_map/magi_site_map.png';
import Sketch01 from '../../../../../assets/091021/case_study_magi/sketches/magi_sketches.png';

import WireFrame01 from '../../../../../assets/091021/case_study_magi/wireframes/magi_wireframe_1.png';
import WireFrame02 from '../../../../../assets/091021/case_study_magi/wireframes/magi_wireframe_2.png';



const Define = () => {


  return (
    <>
      <div className="story_04 mb-4 md:mb-24 text-center">
        <BuiltIn
          subHeaderContent="User Flows"
          subHeaderClass="mb-4" />
        <div className="story_04-1">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={UserFlow01}
            />
            <img className="mb-12" src={UserFlow01} alt="user flow 1" />
          </picture>
        </div>


        <div className="story_04-2">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={UserFlow02}
            />
            <img src={UserFlow02} alt="user flow 2" />
          </picture>


        </div>
      </div>

      <div className="story_05 mb-4 md:mb-24 text-center">
        <BuiltIn
          subHeaderContent="Site Map"
          subHeaderClass="mb-4" />
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={SiteMap}
          />
          <img className="mb-12" src={SiteMap} alt="asset managment tool sitemap" />
        </picture>
      </div>

      <div className="story_05 mb-4 md:mb-24">
        <div className="">
          <div className="sketch_content mr-3">
            <BuiltIn
              subHeaderContent="Sketches"
              subHeaderClass="mb-4" />
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Sketch01}
              />
              <img className="mb-12" src={Sketch01} alt="sketch" />
            </picture>
          </div>


        </div>
      </div>

      <div className="story_06">
        <BuiltIn
          subHeaderContent="Wireframes"
          subHeaderClass="mb-4" />

        <div>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={WireFrame01}
            />
            <img className="mb-12" src={WireFrame01} alt="sketch" />
          </picture>
        </div>
        <div>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={WireFrame02}
            />
            <img className="mb-12" src={WireFrame02} alt="sketch" />
          </picture>
        </div>


      </div>


    </>
  )
}

export default Define
