import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const HomePage = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15), 0 2px 9px 0 rgba(0, 0, 0, 0.11);
  padding: 8px;
  background-color: #4d73b0;
`;

const Home = () => {
  return (
    <HomePage>
      <Row>
        <Col className="col-12 d-flex align-items-center justify-content-center">
          <Button
            variant="primary"
            className="col-6 py-4"
            style={{ border: '2px solid #FFFFFF' }}
          >
            WELCOM TO REACT SPA!
          </Button>
        </Col>
      </Row>
    </HomePage>
  );
};

export default Home;
