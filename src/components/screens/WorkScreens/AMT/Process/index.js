import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import DiscoverContent from './01Discover';
import DefineContent from './02Define';
import DevelopContent from './03Develop';
import DeliverContent from './04Deliver';



const SubProcessContent = () => {
  return (
    <div className="SubProcessContent">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>DISCOVER</Accordion.Header>
          <Accordion.Body>
            <DiscoverContent />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>DEFINE</Accordion.Header>
          <Accordion.Body>
            <DefineContent />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>DEVELOP</Accordion.Header>
          <Accordion.Body>
            <DevelopContent />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>DELIVER</Accordion.Header>
          <Accordion.Body>
            <DeliverContent />
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
  )
}

export default SubProcessContent;
