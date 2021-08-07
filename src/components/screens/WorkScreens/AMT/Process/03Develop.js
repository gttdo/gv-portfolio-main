import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import StyleGuide from '../../../../../assets/works/AMT/style_guide.jpg';

const Develop = () => {
  return (
    <div className="flex flex-col">
      <BuiltIn
        subHeaderContent="Style Guide"
        subHeaderClass="mb-4" />

      <div className="content">
        <picture>
          <source
            media="(max-width: 767px)"
            srcset={StyleGuide}
          />
          <img className="mb-12" src={StyleGuide} alt="stye guide" />
        </picture>
      </div>
    </div>
  )
}

export default Develop;
