import React from 'react';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#497799' }}>
      <Row style={{ height: '11em' }}>
        <Col className="col-5 d-flex align-items-center">
          <NavLink to="/home" className="col-11 mt-5 ml-3 h-50">
            <Button
              variant="success"
              className="col-12 py-4"
              style={{ border: '2px solid #FFFFFF' }}
            >
              TITLE
            </Button>
          </NavLink>
        </Col>
        <Col className="col-7 test d-flex align-items-center">
          <Container className="container ml-5">
            <Row>
              <Col className="col d-flex justify-content-center">
                <NavLink to="/pageone" className="col-11">
                  <Button
                    variant="success"
                    className="col-12 h-100 py-2"
                    style={{ border: '2px solid #FFFFFF' }}
                  >
                    Link 1
                  </Button>
                </NavLink>
              </Col>
              <Col className="col d-flex justify-content-center">
                <NavLink to="/pagetwo" className="col-11">
                  <Button
                    variant="success"
                    className="col-12 h-100 py-2"
                    style={{ border: '2px solid #FFFFFF' }}
                  >
                    Link 2
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
