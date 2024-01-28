import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Education() {
  return (
    <div className="education">
      <Container>
        <div className="section-heading text-center">
          <h2>
            <strong>
              EDUCATION
            </strong>
          </h2>
        </div>
        <Row>
          <Col sm={4} className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>2014 - 2018</h2>
            </div>
            <div className="timeline-horizontal-border">
              <i className="fa fa-circle" aria-hidden="true"></i>
              <span className="single-timeline-horizontal"></span>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <h4 className="title">
                  Học tại trường trung học cơ sở đông hòa
                </h4>
              </div>
            </div>
          </Col>
          <Col sm={4} className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>2018 - 2021</h2>
            </div>
            <div className="timeline-horizontal-border">
              <i className="fa fa-circle" aria-hidden="true"></i>
              <span className="single-timeline-horizontal"></span>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <h4 className="title">
                  Học tại trường trung học phổ thông bình an
                </h4>
              </div>
            </div>
          </Col>
          <Col sm={4} className="single-horizontal-timeline">
            <div className="experience-time">
              <h2>2021 - nay</h2>
            </div>
            <div className="timeline-horizontal-border">
              <i className="fa fa-circle" aria-hidden="true"></i>
              <span className="single-timeline-horizontal"></span>
            </div>
            <div className="timeline">
              <div className="timeline-content">
                <h4 className="title">
                  Học tại trường cao đẳng an ninh mạng ispace
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
