import React from 'react';
import { ProgressBar, Row, Col } from 'react-bootstrap';

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="container">
        <h2 className="section-heading text-center">
          <strong>SKILLS</strong>
        </h2>
        <Row className="mt-top">
          <Col sm={6}>
            <p>HTML</p>
            <ProgressBar now={50} label={`${50}%`} />
          </Col>
          <Col sm={6}>
            <p>CSS</p>
            <ProgressBar now={40} label={`${40}%`} />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <p>JAVASCRIPT</p>
            <ProgressBar now={20} label={`${20}%`} />
          </Col>
          <Col sm={6}>
            <p>C#</p>
            <ProgressBar now={35} label={`${35}%`} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
