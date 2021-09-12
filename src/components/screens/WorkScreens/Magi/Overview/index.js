import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';
import CardFlip from '../../../../core-ui/CardFlip/CardFlip';

import MagiIframe from '../../../iFrames/MagiIframe';
import Demographics from '../../../../../assets/091021/case_study_magi/demographics/magi_audience_graph.png';
import DemographicsMobile from '../../../../../assets/091021/case_study_magi/demographics/magi_audience_graph_mobile.png';
import CatalogImg from '../../../../../assets/091021/mockup_art/magi_mockup.png';

import Card01 from '../../../../../assets/091021/flipcards/research_front.png';
import Card02 from '../../../../../assets/091021/flipcards/research_back.png';
import Card03 from '../../../../../assets/091021/flipcards/ux_design_front.png';
import Card04 from '../../../../../assets/091021/flipcards/ux_design_back.png';
import Card05 from '../../../../../assets/091021/flipcards/ui_design_front.png';
import Card06 from '../../../../../assets/091021/flipcards/ui_design_back.png';
import Card07 from '../../../../../assets/091021/flipcards/testing_front.png';
import Card08 from '../../../../../assets/091021/flipcards/testing_back.png';

import Card01S from '../../../../../assets/091021/flipcards/mobile/research_front_mobile.png';
import Card02S from '../../../../../assets/091021/flipcards/mobile/research_back_mobile.png';
import Card03S from '../../../../../assets/091021/flipcards/mobile/ux_design_front_mobile.png';
import Card04S from '../../../../../assets/091021/flipcards/mobile/ux_design_back_mobile.png';
import Card05S from '../../../../../assets/091021/flipcards/mobile/ui_design_front_mobile.png';
import Card06S from '../../../../../assets/091021/flipcards/mobile/ui_design_back_mobile.png';
import Card07S from '../../../../../assets/091021/flipcards/mobile/testing_front_mobile.png';
import Card08S from '../../../../../assets/091021/flipcards/mobile/testing_back_mobile.png';

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
          paragraphContent="The subscription box model has been on the rise during the past years as more and more customers have shifted towards online shopping as their primary method for acquiring new products. Our focus in this project was to design a platform that would provide a seamless User Experience and increase customer retention." />
      </div>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Roles &amp; Responsibilities"
          subHeaderClass="mb-4" />

        <div className="hidden Carousel content md:flex flex-nowrap justify-between Carousel_recent--wrapper">
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

        <div className="md:hidden Carousel content flex flex-nowrap justify-between Carousel_recent--wrapper">
          <div className="mr-8 Carousel_recent"><CardFlip
            frontImage={Card01S}
            altText="Front Card: Research"
            backImg={Card02S}
            backAltText="Back Card: Competitive Analysis. User Surveys. User Interviews." /></div>
          <div className="mx-8 Carousel_recent"><CardFlip
            frontImage={Card03S}
            altText="Front Card: UX Design"
            backImg={Card04S}
            backAltText="Back Card: User Flows. Wireframes." /></div>
          <div className="mx-8 Carousel_recent"><CardFlip
            frontImage={Card05S}
            altText="Front Card: UI Design"
            backImg={Card06S}
            backAltText="Back Card: Usability Testing. A/B Testing." /></div>
          <div className="ml-8 Carousel_recent"><CardFlip
            frontImage={Card07S}
            altText="Front Card: Testing"
            backImg={Card08S}
            backAltText="Back Card" /></div>
        </div>

      </div>

      <div className="story_03 mb-12">
        <BuiltIn
          subHeaderContent="Challenge"
          subHeaderClass="mb-4"
          paragraphContent="As subscription-based business continue to rise, many customers have found themselves tirelessly searching the web for subscriptions that best fit their interests. Also, customers have too many subscriptions and don’t have a simple way to manage them all." />
      </div>

      <BuiltIn
        subHeaderContent="Audience"
        subHeaderClass="mb-4" />
      <ul className="mb-8">
        <li className="">&bull; 61.9% between the ages of 15 - 30</li>
        <li className="">&bull; 81% Female</li>
        <li className="">&bull; 66.7% Unmarried</li>
      </ul>

      <div className="image_wrapper mb-12">
        <picture>
          <source media="(max-width: 767px)" srcSet={DemographicsMobile} />
          <img className="sds_full" src={Demographics} alt="Demographics" />
        </picture>
      </div>



      <div className="story_05 mb-12 mx-auto">
        <div className="flex flex-col">
          <BuiltIn
            subHeaderContent="Solutions"
            subHeaderClass="mb-4" />
          <div className="iframe_container">
            <img className="w-2/4" src={CatalogImg} alt="catalog" />
            <div className="text-center">
              <Button id="ModalButton" className="ModalButton mt-8" onClick={handleShow}>
                Open Prototype
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Magi Prototype</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <MagiIframe />
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
