import React from 'react';

import ContentModule from '../../core-ui/ContentModule/ContentModule';
import FixedButton from '../../core-ui/Button/FixedButton';

const ContactScreen = () => {
  return (
    <div className="ContactScreen mb-20">
      <ContentModule
        addClass="w-full mb-12"
        headerContent="GET IN TOUCH"
        paragraphContent="" />
      <div className="flex flex-col md:flex-row ">
        <div className="ContactScreen_contact--details mb-12 md:mt-48">
          <ul>
            <li className="mb-3">
              <span className="icon mr-7">
                <i className="fas fa-phone-alt"></i>
              </span>
              <a href="tel:14153771722">+1 415 377 1722</a>
            </li>
            <li className="mb-3">
              <span className="icon mr-7">
                <i className="far fa-envelope"></i>
              </span>
              <a href="mailto:vinces.gerardo@gmail.com">vinces.gerardo@gmail.com</a>
            </li>
            <li className="mb-3">
              <span className="icon mr-7">
                <i className="fas fa-globe-americas"></i>
              </span>
              San Francisco, CA
            </li>
          </ul>
        </div>
        <div className="ContactScreen_contact--form py-11 px-6 md:py-12 md:px-7 md:w-2/3 md:ml-auto">
          <form action="#">
            <div className="ContactScreen_contact--form_wrapper mb-9">
              <label htmlFor="formName">Name</label>
              <input className="ContactScreen_input block w-full mt-4" type="text" id="input-name" name="formName" />
            </div>
            <div className="ContactScreen_contact--form_wrapper mb-9">
              <label htmlFor="formEmail">Email Address</label>
              <input className="ContactScreen_input block w-full mt-4" type="email" id="input-email" name="formEmail" />
            </div>
            <div className="ContactScreen_contact--form_wrapper mb-12">
              <label htmlFor="formMessage">Message</label>
              <textarea className="ContactScreen_input w-full block mt-4" type="text" id="input-message" name="formMessage" />
            </div>
            <div className="text-center md:text-left">
              <FixedButton variant="red" textContent="SEND" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen
