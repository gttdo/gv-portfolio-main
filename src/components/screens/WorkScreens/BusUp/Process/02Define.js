import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import UserFlow01 from '../../../../../assets/091021/case_study_bus_up/user_flows/bus_up_user_flows.png';
import SiteMap from '../../../../../assets/091021/case_study_bus_up/site_map/bus_up_site_map.png';
import Sketch01 from '../../../../../assets/091021/case_study_bus_up/sketches/bus_up_sketches_1.png';
import Sketch02 from '../../../../../assets/091021/case_study_bus_up/sketches/bus_up_sketches_2.png';

import WireFrame01 from '../../../../../assets/091021/case_study_bus_up/wireframes/bus_up_wireframe_1.png';
import WireFrame02 from '../../../../../assets/091021/case_study_bus_up/wireframes/bus_up_wireframe_2.png';
import WireFrame03 from '../../../../../assets/091021/case_study_bus_up/wireframes/bus_up_wireframe_3.png';



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
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={Sketch02}
              />
              <img className="mb-12" src={Sketch02} alt="sketch" />
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
        <div>
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={WireFrame03}
            />
            <img className="mb-12" src={WireFrame03} alt="sketch" />
          </picture>
        </div>


      </div>


    </>
  )
}

export default Define
