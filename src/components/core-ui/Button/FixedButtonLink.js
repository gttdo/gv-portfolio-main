import React from 'react';
import { Link } from 'react-router-dom';

const FixedButtonLink = ({ addClass, linkTo, newPage, rel, textContent, variant, disabled }) => {
  return (
    <Link to={linkTo}>
      <button disabled={`disabled ? true : false`} className={`FixedButton ${variant} ${addClass}`}>{textContent}</button>
    </Link>

  )
}

export default FixedButtonLink
