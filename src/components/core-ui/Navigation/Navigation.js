import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

import Logo from '../../../assets/091021/logo/davinces_design_logo.svg';


const Navigation = () => {

  function handleClose(evt) {
    evt.preventDefault();

    if (document.querySelector('.navigation__checkbox').checked === true) {
      document.querySelector('.navigation__checkbox').checked = false;
    } else {
      document.querySelector('.navigation__checkbox').checked = true;
    }

  }


  return (
    <div className="Navigation relative">
      <nav className="hidden md:inline-block items-center h-full md:flex relative">
        <Link to="/" className="flex items-center">
          <img className="logo mr-4" src={Logo} alt="Gerardo Vinces" />
        </Link>
        <div className="hidden md:block md:flex-1">
          <ul className="flex justify-center items-center">
            <li className="">
              <NavLink className="Navigation_link" activeClassName="isNavActive" to="/about">
                About
              </NavLink>
            </li>
            <Dropdown>
              <Dropdown.Toggle className="Navigation_link" id="dropdown-basic">
                Works
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <NavLink className="Navigation_link" to="/magi">Magi</NavLink>
                <NavLink className="Navigation_link" to="/localeyez">LocalEyez</NavLink>
                <NavLink className="Navigation_link" to="/amt">Asset Management Tool</NavLink>
                <NavLink className="Navigation_link" to="/busup">Bus App</NavLink>

              </Dropdown.Menu>
            </Dropdown>
            <li className="">
              <NavLink className="Navigation_link" activeClassName="isNavActive" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:block md:flex">
          <ul className="flex justify-center items-center">
            <li><a target="_blank" rel="noopener noreferrer" aria-label="linkedin" href="https://www.linkedin.com/in/gvinces/"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="p-12"><a target="_blank" rel="noopener noreferrer" aria-label="instagram" href="https://www.instagram.com/a.traveler.journal"><i className="fab fa-instagram"></i></a></li>
            <li><a target="_blank" rel="noopener noreferrer" aria-label="twitter" href="https://twitter.com/gerardo_vinces"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </nav>

      <div className="Navigation md:hidden">
        <Link to="/" className="flex items-center">
          <img className="logo mr-4" src={Logo} alt="Gerardo Vinces" />
        </Link>
        <input
          type="checkbox"
          id="navi-toggle"
          className="navigation__checkbox"
        />

        <label className="navigation__button" htmlFor="navi-toggle">
          <span className="navigation__icon"> &nbsp;</span>
        </label>

        <div id="navBG" className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li htmlFor="navi-toggle" className="navigation__item" onClick={handleClose}>
              <Link to="/" className="navigation__link nav_close">
                Home
              </Link>
            </li>
            <li htmlFor="navi-toggle" className="navigation__item" onClick={handleClose}>
              <Link to="/about" className="navigation__link nav_close">
                About
              </Link>
            </li>
            <li className="navigation__item" onClick={handleClose}>
              <Link to="/magi" className="navigation__link smaller">
                Magi
              </Link>
            </li>
            <li className="navigation__item" onClick={handleClose}>
              <Link to="/localeyez" className="navigation__link smaller">
                Localeyez
              </Link>
            </li>
            <li className="navigation__item" onClick={handleClose}>
              <Link to="/amt" className="navigation__link smaller">
                AMT
              </Link>
            </li>
            <li className="navigation__item" onClick={handleClose}>
              <Link to="/busup" className="navigation__link smaller">
                BusUp
              </Link>
            </li>
            <li className="navigation__item" onClick={handleClose}>
              <Link to="/contact" className="navigation__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div >
  )
}

export default Navigation
