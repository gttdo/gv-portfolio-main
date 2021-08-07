import React from 'react'

const BuiltIn = ({ addClass, headerContent, subHeaderContent, paragraphContent, addHeaderClass, subHeaderClass, addParagraphClass }) => {
  return (
    <div className={`BuiltIn ${addClass}`}>
      <h4 className={` ${addHeaderClass}`}>{headerContent}</h4>
      <h6 className={` ${subHeaderClass}`}>{subHeaderContent}</h6>
      <p className={` ${addParagraphClass}`}>{paragraphContent}</p>

    </div>
  )
}

export default BuiltIn
