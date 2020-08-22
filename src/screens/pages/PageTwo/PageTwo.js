import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'screens/components/Header';
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

const PageTwo = ({ user }) => {
  const [haveAccess, setHaveAccess] = useState(false);
  const [haveNoAccess, setHaveNoAccess] = useState(false);

  const handleSubmit = () => {
    if (user.age < 18) {
      setHaveNoAccess(true);
      setHaveAccess(false);
    } else {
      setHaveAccess(true);
      setHaveNoAccess(false);
    }
  };

  return (
    <>
      <Header />
      <Page>
        <Row>
          <Col className="col-12 text-center d-flex justify-content-center mb-5">
            <Col className="bluecolumn col-11 py-4 m-4">
              {user.name &&
                user.surname &&
                `${user.name} ${user.surname}'s Page`}
            </Col>
          </Col>
        </Row>

        <Row>
          <Col className="col-12 d-flex justify-content-center text-center">
            <Button
              variant="success"
              className="col-2 py-2 my-4"
              style={{ border: '2px solid #ffffff' }}
              onClick={handleSubmit}
            >
              ACCESS
            </Button>
          </Col>
        </Row>

        {haveNoAccess && (
          <Row>
            <Col className="col-12 d-flex text-center justify-content-center">
              <Col
                className="col-3 mt-5 m-4 py-2 text-center"
                style={{
                  backgroundColor: 'red',
                  border: '2px solid #ffffff',
                  color: '#fff',
                }}
              >
                You by at least 18 years old !
              </Col>
            </Col>
          </Row>
        )}

        {haveAccess && (
          <Row>
            <Col className="col-12 d-flex justify-content-center text-center">
              <div
                style={{
                  width: '500px',
                  height: '500px',
                  border: '2px solid #ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="https://www.pandasecurity.com/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg"
                  alt="Hacker"
                  style={{
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            </Col>
          </Row>
        )}
      </Page>
    </>
  );
};

export default PageTwo;
