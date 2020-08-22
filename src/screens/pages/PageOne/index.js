import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
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

const PageOne = (props) => {
  return (
    <Page>
      <Row>
        <Col className="col-5 d-flex text-center">
          <Col className="bluecolumn col-9 py-4 m-4">User Data</Col>
        </Col>
      </Row>

      <Row className="row">
        <Col className="col-12 d-flex text-center">
          <Col className="bluecolumn col-11 py-4 m-4">
            Hello $name $surname !
          </Col>
        </Col>
      </Row>

      <Row>
        <Col className="col-10 d-flex justify-content-center mt-3 mb-5">
          <NavLink to="/pagetwo" className="col-3 mb-3">
            <Button
              variant="success"
              className="col-12 h-100 py-2"
              style={{ border: '2px solid #ffffff' }}
            >
              Save
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Page>
  );
};

export default PageOne;
