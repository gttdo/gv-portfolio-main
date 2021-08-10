import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import BuiltIn from '../../../../core-ui/BuiltIn/BuiltIn';

import HMImg01 from '../../../../../assets/works/AMT/checkout_2_heatmap.jpg';
import HMImg02 from '../../../../../assets/works/AMT/product_screen_heatmap.jpg';
import HMImg03 from '../../../../../assets/works/AMT/catalog_heatmap.jpg';
import HMImg04 from '../../../../../assets/works/AMT/category_heatmap.jpg';

import UsabilityScores from '../../../../../assets/works/AMT/usability_test_graph.svg';
import UserFeedback from '../../../../../assets/works/AMT/user_feedback1@4x.png';

const Deliver = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="story_01 mb-12">
        <BuiltIn
          subHeaderContent="Usability Test Findings"
          subHeaderClass="mb-4" />

        <ul className="story_01_list">
          <li>&bull; Some participants were having difficulty understanding the questions during the usability test.</li>
          <li>&bull; Most of the participants completed the tasks during the usability test.
          </li>
          <li>&bull; Most participants found the prototype easy to navigate.</li>
          <li>&bull; The average time that a participant took to accomplish a task was of 6.5 seconds.
          </li>
        </ul>
      </div>

      <div className="story_02 mb-12">
        <BuiltIn
          subHeaderContent="Heat Map"
          subHeaderClass="mb-4" />

        <div className="Carousel content flex flex-nowrap justify-between Carousel_recent--wrapper">
          <div className="mr-2 Carousel_recent w-10/12">
            <img src={HMImg01} alt="heatmap 1" />
          </div>
          <div className="mx-2 Carousel_recent w-10/12">
            <img src={HMImg02} alt="heatmap 2" />
          </div>
          <div className="mx-2 Carousel_recent w-10/12">
            <img src={HMImg03} alt="heatmap 3" />
          </div>
          <div className="ml-2 Carousel_recent w-10/12">
            <img src={HMImg04} alt="heatmap 4" />
          </div>
        </div>
      </div>

      <div className="story_03">
        <BuiltIn
          subHeaderContent="Usability Scores"
          subHeaderClass="mb-4" />

        <picture>
          <source
            media="(max-width: 767px)"
            srcset={UsabilityScores}
          />
          <img className="mb-12" src={UsabilityScores} alt="usability scores" />
        </picture>
      </div>

      <div className="story_4 text-center">
        <BuiltIn
          subHeaderContent="User Comments"
          subHeaderClass="mb-4" />

        <picture>
          <source
            media="(max-width: 767px)"
            srcset={UserFeedback}
          />
          <img className="mb-12" src={UserFeedback} alt="user comments" />
        </picture>
        <Button id="ModalButton" className="ModalButton mt-8 mb-8" onClick={handleShow}>
          View Feedback
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>User Feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img className="" src={UserFeedback} alt="user feedback" />
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Deliver
