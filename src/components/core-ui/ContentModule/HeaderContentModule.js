import React from 'react'

const HeaderContentModule = ({ addClass, headerTwoContent, headerContent, addCustomHeaderClass }) => {
  return (
    <div className={`HeaderContentModule ${addClass}`}>
      <h1 className="mb-8">{headerContent}</h1>
      <h2 className={`${addCustomHeaderClass}`}>{headerTwoContent}</h2>
    </div>
  )
}

export default HeaderContentModule;
