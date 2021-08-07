import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../../assets/logo.jpg';


const Navigation = () => {

  return (
    <div className="Navigation relative">
      <nav className="hidden md:inline-block items-center h-full md:flex relative">
        <Link to="/" className="flex items-center">
          <img className="logo rounded-full mr-4" src={Logo} alt="Home" />
          GERARDO VINCES
        </Link>
        <div className="flex-1">
          <ul className="flex justify-center items-center">
            <li className="">
              <NavLink className="Navigation_link" activeClassName="isNavActive" to="/about">
                About
              </NavLink>
            </li>
            <li className="p-12">
              <NavLink className="Navigation_link" activeClassName="isNavActive" to="/works">
                Works
              </NavLink>
            </li>
            <li className="">
              <NavLink className="Navigation_link" activeClassName="isNavActive" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="flex justify-center items-center">
            <li><a target="_blank" rel="noopener noreferrer" aria-label="linkedin" href="https://www.linkedin.com/in/gvinces/"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="p-12"><a target="_blank" rel="noopener noreferrer" aria-label="instagram" href="https://www.instagram.com/a.traveler.journal"><i className="fab fa-instagram"></i></a></li>
            <li><a target="_blank" rel="noopener noreferrer" aria-label="twitter" href="https://twitter.com/gerardo_vinces"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </nav>

      <div className="Navigation md:hidden">
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
            <li htmlFor="navi-toggle" className="navigation__item">
              <Link to="/" className="navigation__link nav_close">
                Home
              </Link>
            </li>
            <li htmlFor="navi-toggle" className="navigation__item">
              <Link to="/about" className="navigation__link nav_close">
                About
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/works" className="navigation__link">
                Works
              </Link>
            </li>
            <li className="navigation__item">
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
