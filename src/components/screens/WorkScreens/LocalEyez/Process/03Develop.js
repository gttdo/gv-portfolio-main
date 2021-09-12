import React from 'react';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import StyleGuide from '../../../../../assets/091021/case_study_localeyez/style_guide/style_guide.png';

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
            srcSet={StyleGuide}
          />
          <img className="mb-12" src={StyleGuide} alt="stye guide" />
        </picture>
      </div>
    </div>
  )
}

export default Develop;
