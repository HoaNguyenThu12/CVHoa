import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Experience () {
  return (
    <section id="experience" className="experience">
      <Container>
        <div className="section-heading text-center">
          <h2><strong>EXPERIENCE</strong></h2>
        </div>
                <div className="single-timeline-box fix">
                  <Row>
                    <Col md={5}>
                      <div className="experience-time text-right">
                        <h2>2021 - Nay</h2>
                      </div>
                    </Col>
                    <Col md={5} className="offset-md-1">
                      <div className="timeline">
                        <div className="timeline-content">
                          <h4 className="title">
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            Đã từng làm nhân viên bán thời gian ở Phúc Long
                          </h4>
                          <h5>Hiện đã chuyển qua Highland Coffee</h5>
                          <p>
                            Vẫn chưa có nhiều kinh nghiệm về Thiết Kế Web. Nhưng có kinh nghiệm về kỹ năng xã hội khác 
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
      </Container>

    </section>
  );
}
