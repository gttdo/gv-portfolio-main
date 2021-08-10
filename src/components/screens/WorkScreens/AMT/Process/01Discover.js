import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import SWOTGraph from '../../../../../assets/works/AMT/SWOTanalysis@4x.png';
import SWOTGraphS from '../../../../../assets/works/AMT/SWOT_analysis_S.png';
import UserPersonaWoman from '../../../../../assets/works/AMT/UserPerson_Woman.jpg';
import UserPersonaWomanS from '../../../../../assets/works/AMT/UserPerson_Woman_S.png';
import UserPersonaQuote from '../../../../../assets/works/AMT/UserPersona_Quote.png';
import UserPersonaQuoteXL from '../../../../../assets/works/AMT/UserPersona_Quote_S.png';
import CaseStudyProcess from '../../../../../assets/works/AMT/user_journey@4x.png';

const Discover = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const handleCloseA = () => setShowA(false);
  const handleShowA = () => setShowA(true);

  const handleCloseB = () => setShowB(false);
  const handleShowB = () => setShowB(true);
  return (
    <>
      <div className="story_01 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="Competitive Analysis"
          subHeaderClass="mb-4"
          paragraphContent="We conducted a thorough SWOT analysis on the following competitors, asset Panda, Reftab, and Fishbowl."
        />

        <picture>
          <source
            media="(max-width: 767px)"
            srcset={SWOTGraphS}
          />
          <img src={SWOTGraph} alt="Asset Panda: Strengths: Available across platforms. Weaknesses: Too complex. Lack onboarding. Opportunities: Applicable for any industry. Threats: Market Saturation. Fishbowl: Strengths: Support team. Notifications. Weaknesses: Non intuitive. Opportunities: Modern design trend. Threats: Competitors with similar features. Reftab: Strengths: Upload inventory. Weaknesses: Lack responsive design. Opportunities: High demand. Threats: Free demo." />
        </picture>
        <div className="text-center"><Button id="ModalButton" className="ModalButton mt-8 mb-8" onClick={handleShowA}>
          Enlarge Image
        </Button></div>

        <Modal show={showA} onHide={handleCloseA}>
          <Modal.Header closeButton>
            <Modal.Title>SWOT Graph</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="" src={SWOTGraph} alt="Swot Graph" />
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>

      <div className="story_02 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="User Persona"
          subHeaderClass="mb-4" />


        <div className="flex flex-col md:flex-row">
          <div className="image_content md:w-1/3">
            <picture>
              <source
                media="(max-width: 767px)"
                srcset={UserPersonaWomanS}
              />
              <img className="w-full" src={UserPersonaWoman} alt="user persona woman" />
            </picture>
          </div>

          <div className="copy_content">
            <div className="flex flex-col">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcset={UserPersonaQuoteXL}
                />
                <img className="mb-3 w-full" src={UserPersonaQuote} alt="Having easy access to the tools for my craft is very important for me, so I can accomplish with ease my day to day tasks and increase my performance." />
              </picture>


              <BuiltIn
                headerContent="Motivations"
                subHeaderClass="mb-1"
                paragraphContent="Isabella is a go getter type of person. She likes to use the latest tools that can help her facilitate her work. She is constantly looking for life-hacks as well."
                addParagraphClass="mb-2" />
              <BuiltIn
                headerContent="Goals"
                addHeaderClass="mb-1" />
              <ul className="mb-2">
                <li className="">&bull; Complete her daily tasks</li>
                <li className="">&bull; Attend meetings on time</li>
                <li className="">&bull; Run tests on her code</li>
                <li className="">&bull; Tackle backlog tasks</li>
                <li className="">&bull; Mentor junior developers</li>
              </ul>
              <BuiltIn
                headerContent="Bio"
                addHeaderClass="mb-2"
                paragraphContent="Laura is a Web Developer at a large retail store. She likes fashion and enjoys her workplace. She is very driven by efficiency and she is constantly searching for a new life-hack." />

            </div>
          </div>
        </div>
      </div>

      <div className="story_03 mb-4 md:mb-24">
        <BuiltIn
          subHeaderContent="User Journey"
          subHeaderClass="mb-4" />

        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="copy_01 mb-4 w-full md:mr-12">
            <p className="story_03_copy">
              Scenario
            </p>
            <p className="mb-2">Laura is testing a new catalog page in mobile viewports and needs to checkout a smart phone from IT.</p>

          </div>
          <div className="copy_02 mb-4 w-full">
            <p className="story_03_copy">
              Expectations
            </p>
            <ul className="mb-2">
              <li className="">&bull; Input her employee information</li>
              <li className="">&bull; Login into her work’s dashboard </li>
              <li className="">&bull; Look at images of the devices</li>
              <li className="">&bull; Look at the specs for the devices</li>
              <li className="">&bull; Similar checkout process as an ecommerce</li>
              <li className="">&bull; Receive a confirmation that her request was received.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="story_04">
        <div className="hidden md:inline-block md:mb-8 md:text-center">
          <img src={CaseStudyProcess} alt="Login or Register: 1. Open website in her phone. 2. Logs in with her employee credentials. Catalog Search: 3. Scrolls through the page. 4. Selects a catgory. 5. Selects all devices that she needs. 6. Adds devices to her cart. Cart: 7. Reviews the items from her cart. 8. Remove any items that she doesn't need. 9. Proceed to checkout. Checkout: 10. Inputs her contact information. 11. Picks up a date and dropoff of the devices. 12. Reviews the items that she chose. 13. Submits a request. " />
          <Button id="ModalButton" className="ModalButton mt-8 mb-8" onClick={handleShowB}>
            Enlarge Image
          </Button>

          <Modal show={showB} onHide={handleCloseB}>
            <Modal.Header closeButton>
              <Modal.Title>Case Study Process</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="" src={CaseStudyProcess} alt="case study process" />
            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
          </Modal>
        </div>
        <div className="md:hidden Carousel content flex flex-nowrap justify-between Carousel_recent--wrapper">
          <div className="mr-2 Carousel_recent w-10/12">
            <p className="story_04_copy mb-1">
              Login | Register
            </p>
            <ul className="story_04_list">
              <li>1. Opens website on her phone</li>
              <li>2. Logs in with her employee credentials.</li>
            </ul>
          </div>
          <div className="mx-2 Carousel_recent w-10/12">
            <p className="story_04_copy mb-1">
              Catalog Search
            </p>
            <ul className="story_04_list">
              <li>3. Scrolls through the page.</li>
              <li>4. Selects a category.</li>
              <li>5. Selects all devices that she needs.</li>
              <li>6. Adds devices to her cart.</li>
            </ul>
          </div>
          <div className="mx-2 Carousel_recent w-10/12">
            <p className="story_04_copy mb-1">
              Cart
            </p>
            <ul className="story_04_list">
              <li>7. Reviews the items from her cart.</li>
              <li>2. Remove any items that she doesn't need.</li>
              <li>2. Proceeds to checkout.</li>
            </ul>
          </div>
          <div className="ml-2 Carousel_recent w-10/12">
            <p className="story_04_copy mb-1">
              Checkout
            </p>
            <ul className="story_04_list">
              <li>10. Inputs her contact information.</li>
              <li>11. Picks a date for pickup and drop off the devices</li>
              <li>12. Reviews the items that she chose.</li>
              <li>13. Submits a request.</li>

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Discover;
