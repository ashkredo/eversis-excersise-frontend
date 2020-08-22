import React from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Page = styled.div`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.15), 0 2px 9px 0 rgba(0, 0, 0, 0.11);
  padding: 8px;
  background-color: #4d73b0;
  .bluecolumn {
    background-color: #336796;
    color: #fff;
    border: 2px solid #ffffff;
  }
`;

const PageTwo = () => {
  return (
    <Page>
      <Row>
        <Col className="col-12 text-center d-flex justify-content-center mb-5">
          <Col className="bluecolumn col-11 py-4 m-4">$name $surname Page</Col>
        </Col>
      </Row>

      <Row>
        <Col className="col-12 d-flex justify-content-center text-center">
          <Button
            variant="success"
            className="col-2 py-2 my-4"
            style={{ border: '2px solid #ffffff' }}
          >
            ACCESS
          </Button>
        </Col>
      </Row>
    </Page>
  );
};

export default PageTwo;
