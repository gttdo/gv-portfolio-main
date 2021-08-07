import React from 'react'

import FixedButtonLink from '../Button/FixedButtonLink';

const ImageContentModule = ({ addImage, imageDirection, imageMargin, headerContent, paragraphContent, linkTo, variant }) => {
  return (
    <div className="ImageContentModule mb-40 md:mb-20">
      <div className={`flex flex-col md:justify-center ${imageDirection}`}>
        <div className={`ImageContentModule_content text-center md:text-left md:w-1/2`}>
          <h3 className={`text-4xl mb-7`}>{headerContent}</h3>
          <hr className="mb-7" />
          <p className={`mb-7`}>{paragraphContent}</p>
          <FixedButtonLink addLinkClass="" addClass="mb-7" textContent="View Case Study" linkTo={linkTo} variant={variant} />
        </div>
        <div className="ImageContentModule_image--wrapper md:w-1/2">
          <img className={`mb-7 md:w-3/4 ${imageMargin}`} src={addImage} alt="bus up" />
        </div>

      </div>
    </div>
  )
}

export default ImageContentModule
