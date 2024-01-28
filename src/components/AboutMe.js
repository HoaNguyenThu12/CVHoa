import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function About() {
  return (
    <div className="about">
      <div>
        <h2 className="mt-bottom">
          <strong>ABOUT ME</strong>
        </h2>
        <p>
          Xin chào! Tôi là Nguyễn Thu Hòa, một nhà thiết kế web sáng tạo và nhiệt huyết với đam mê sâu sắc về trải nghiệm người dùng và thiết kế đẹp. 
          Với kinh nghiệm đa dạng trong việc phát triển các trang web động, tôi không chỉ làm việc để tạo ra giao diện hấp dẫn mà còn đảm bảo rằng trang web của bạn hoạt động mượt mà và tương tác tốt.
        </p>
      </div>
      <div>
        <h4>
          <strong>PERSONAL INFO</strong>
        </h4>
        <Row className="mt">
          <Col>
            <p>
              <strong>Name:</strong> Nguyễn Thu Hòa
            </p>
            <p>
              <strong>Email:</strong> hoanguyenthu12@gmail.com
            </p>
          </Col>
          <Col>
            <p>
              <strong>Main Language</strong> - English
            </p>
            <p>
              <strong>Phone:</strong> 079-xxxx-171
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
