import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';


import SiteMap from '../../../../../assets/091021/case_study_localeyez/site_map/localeyez_site_map.png';

import WireFrame01 from '../../../../../assets/091021/case_study_localeyez/wireframes/wireframes.png';



const Define = () => {


  return (
    <>

      <div className="story_05 mb-4 md:mb-24 text-center">
        <BuiltIn
          subHeaderContent="Site Map"
          subHeaderClass="mb-4" />
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={SiteMap}
          />
          <img className="mb-12" src={SiteMap} alt="localeyez sitemap" />
        </picture>
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


      </div>


    </>
  )
}

export default Define
