import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (

    <footer id="footer-copyright" className="footer-copyright">
      <div className="hm-foot-icon">
      <Row>
        <Col>
          <Link to="#" className="larger-icon"><i className="fa fa-facebook"></i></Link>
        </Col>
        <Col>
          <Link to="#" className="larger-icon"><i className="fa fa-dribbble"></i></Link>
        </Col>
        <Col>
          <Link to="#" className="larger-icon"><i className="fa fa-twitter"></i></Link>
        </Col>
        <Col>
          <Link to="#" className="larger-icon"><i className="fa fa-linkedin"></i></Link>
        </Col>
        <Col>
          <Link to="#" className="larger-icon"><i className="fa fa-instagram"></i></Link>
        </Col>
      </Row>
    </div>
      <Container>
        <Row>
          <Col className="hm-footer-copyright text-center">
            <p>
              &copy; copyright <i>HoaNguyenThu</i>. Design and developed by <i>HoaNguyenThu</i>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

