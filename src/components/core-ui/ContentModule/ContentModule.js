import React from 'react'

const ContentModule = ({ addClass, highlightText, headerContent, secondHeaderContent, paragraphContent, paragraphContentClass }) => {
  return (
    <div className={`ContentModule ${addClass}`}>
      <h1 className="mb-7">{headerContent}<span className="highlight">{highlightText}</span>{secondHeaderContent}</h1>
      <p className={`${paragraphContentClass}`}>{paragraphContent}</p>
    </div>
  )
}

export default ContentModule
