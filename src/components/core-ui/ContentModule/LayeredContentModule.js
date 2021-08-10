import React from 'react';

import FixedButtonLink from '../Button/FixedButtonLink';

const LayeredContentModule = ({ addImage, addButtonClass, blob, imageDirection, imageMargin, imageAlt, imageBlobAlt, headerContent, paragraphContent, linkTo, variant, mobileClass, desktopClass }) => {
  return (
    <div className={`LayeredContentModule ${mobileClass} md:${desktopClass}`}>
      <div className={`flex flex-col md:justify-center ${imageDirection}`}>
        <div className={`LayeredContentModule_content text-center md:text-left md:w-1/2`}>
          <h3 className={`text-4xl mb-8`}>{headerContent}</h3>
          <hr className="mb-8" />
          <p className={`mb-8`}>{paragraphContent}</p>
          <FixedButtonLink addLinkClass="" addClass={`mb-16 ${addButtonClass}`} textContent="View Case Study" linkTo={linkTo} variant={variant} />
        </div>
        <div className="LayeredContentModule_image--wrapper md:w-1/2 relative">
          <img src={blob} alt={imageBlobAlt} className="LCM_svg" />
          <img className={`md:w-3/4 LCM_image ${imageMargin}`} src={addImage} alt={imageAlt} />
        </div>

      </div>
    </div>
  )
}

export default LayeredContentModule
