import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

import SubOverviewContent from './Overview/index';
import SubProcessContent from './Process/index';
import SubOutcomesContent from './Outcomes/index';

const TabContainer = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="overview">
        <Row>
          <Col sm={3} className="mb-12">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="overview">Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="process">Process</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="outcomes">Outcomes</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="overview">
                <SubOverviewContent />
              </Tab.Pane>
              <Tab.Pane eventKey="process">
                <SubProcessContent />
              </Tab.Pane>
              <Tab.Pane eventKey="outcomes">
                <SubOutcomesContent />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

export default TabContainer
