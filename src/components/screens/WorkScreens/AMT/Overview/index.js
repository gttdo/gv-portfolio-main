import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';
import CardFlip from '../../../../core-ui/CardFlip/CardFlip';

import AMTIframe from '../../../iFrames/AMTIframe';
import AudienceImg from '../../../../../assets/works/AMT/audience.png';
import CatalogImg from '../../../../../assets/works/AMT/wcd_catalog.png';

import Card01 from '../../../../../assets/works/AMT/rx.jpg';
import Card02 from '../../../../../assets/works/AMT/rxb.jpg';
import Card03 from '../../../../../assets/works/AMT/uxd.jpg';
import Card04 from '../../../../../assets/works/AMT/uxdb.jpg';
import Card05 from '../../../../../assets/works/AMT/uid.jpg';
import Card06 from '../../../../../assets/works/AMT/uidesign-back.svg';
import Card07 from '../../../../../assets/works/AMT/testing.jpg';
import Card08 from '../../../../../assets/works/AMT/testingb.jpg';

const CaseStudyAMTContent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="CaseStudyAMTContent">

      <div className="story_01 mb-12">
        <BuiltIn
          subHeaderContent="Summary"
          subHeaderClass="mb-4"
          paragraphContent="The asset management tool is a web application. It is used to manage inventory and provide access to employees who need to checkout or return loaner devices." />
      </div>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Roles &amp; Responsibilities"
          subHeaderClass="mb-4" />

        <div className="Carousel content flex flex-nowrap justify-between Carousel_recent--wrapper">
          <div className="mr-8 Carousel_recent"><CardFlip
            frontImage={Card01}
            altText="Front Card: Research"
            backImg={Card02}
            backAltText="Back Card: Competitive Analysis. User Surveys. User Interviews." /></div>
          <div className="mx-8 Carousel_recent"><CardFlip
            frontImage={Card03}
            altText="Front Card: UX Design"
            backImg={Card04}
            backAltText="Back Card: User Flows. Wireframes." /></div>
          <div className="mx-8 Carousel_recent"><CardFlip
            frontImage={Card05}
            altText="Front Card: UI Design"
            backImg={Card06}
            backAltText="Back Card: Usability Testing. A/B Testing." /></div>
          <div className="ml-8 Carousel_recent"><CardFlip
            frontImage={Card07}
            altText="Front Card: Testing"
            backImg={Card08}
            backAltText="Back Card" /></div>
        </div>

      </div>

      <div className="story_03 mb-12">
        <BuiltIn
          subHeaderContent="Challenge"
          subHeaderClass="mb-4"
          paragraphContent="The Web Development team's challenge is to develop an online tool for their entire department to check the availability of the devices and place requests to checkout devices." />
      </div>

      <div className="story_04 mb-12">
        <div className="flex flex-col mb-4 md:flex-row md:align-center">
          <div className="image_wrapper mb-12">
            <img src={AudienceImg} alt="audience" />
          </div>
          <div className="flex flex-col">
            <BuiltIn
              subHeaderContent="Audience"
              subHeaderClass="mb-4" />
            <ul>
              <li className="">&bull; ~250 employees</li>
              <li className="">&bull; 80% male employees</li>
              <li className="">&bull; Age range between 25 & 50</li>
              <li className="">&bull; Engineers, Creative & Producers</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="story_05 mb-12 mx-auto">
        <div className="flex flex-col">
          <BuiltIn
            subHeaderContent="Solutions"
            subHeaderClass="mb-4" />
          <div className="iframe_container">
            <img src={CatalogImg} alt="catalog" />
            <Button id="ModalButton" className="ModalButton mt-8" onClick={handleShow}>
              Open Prototype
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Asset Management Tool Prototype</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <AMTIframe />
              </Modal.Body>
              <Modal.Footer>

              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyAMTContent;
