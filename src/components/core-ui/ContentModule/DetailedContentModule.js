import React from 'react'

const DetailedContentModule = ({ addClass, addParagraphContent, headerContent, paragraphContent, spanContent, topParagraphClasses, secondParagraphClasses }) => {
  return (
    <div className={`DetailedContentModule ${addClass}`}>
      <p className={`mb-7 hidden ${topParagraphClasses}`}><span>{spanContent}</span></p>
      <h1 className="mb-7">{headerContent}</h1>
      <p className="mb-4">{paragraphContent}</p>
      <p className={`${secondParagraphClasses}`}>{addParagraphContent}</p>
    </div>
  )
}

export default DetailedContentModule;
