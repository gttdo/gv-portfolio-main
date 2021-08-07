import React from 'react'



const FixedButton = ({ addClass, clickHandler, textContent, variant }) => {
  return (
    <button onClick={clickHandler} className={`FixedButton ${variant} ${addClass}`}>{textContent}</button>
  )
}

export default FixedButton
