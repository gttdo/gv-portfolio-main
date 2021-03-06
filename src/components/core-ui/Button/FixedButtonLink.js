import React from 'react';
import { Link } from 'react-router-dom';

const FixedButtonLink = ({ addClass, linkTo, textContent, variant }) => {
  return (
    <Link to={linkTo}>
      <button className={`FixedButton ${variant} ${addClass}`}>{textContent}</button>
    </Link>

  )
}

export default FixedButtonLink
