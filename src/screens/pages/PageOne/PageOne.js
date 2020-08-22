import React, { useState, useEffect } from 'react';
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

const PageOne = ({ user, updateUserData, ...props }) => {
  const [name, setName] = useState(user.name ? user.name : '');
  const [surname, setSurname] = useState(user.surname ? user.surname : '');
  const [age, setAge] = useState(user.age ? user.age : '');

  const [startedAddingName, setStartedAddingName] = useState(false);
  const [startedAddingSurname, setStartedAddingSurname] = useState(false);
  const [startedAddingAge, setStartedAddingAge] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [ageError, setAgeError] = useState(false);

  useEffect(() => {
    if (startedAddingName) {
      setNameError(true);
    }
    if (startedAddingSurname) {
      setSurnameError(true);
    }
    if (startedAddingAge) {
      setAgeError(true);
    }
  }, [startedAddingName, startedAddingSurname, startedAddingAge]);

  const handleSubmit = () => {
    if (name && surname && age) {
      updateUserData({ name, surname, age });
      props.history.push('pagetwo');
    }
  };

  return (
    <>
      <Header />
      <Page>
        <Row>
          <Col className="col-5 d-flex text-center">
            <Col className="bluecolumn col-9 py-4 m-4">User Data</Col>
          </Col>
        </Row>

        <Row className="col-10 justify-content-between">
          <Col className="bluecolumn col-3 m-4 mt-5 py-2 text-center">
            Name:
          </Col>
          <input
            className="col-3 mt-5 m-4 py-2 text-center"
            style={{
              backgroundColor: 'gray',
              border: '2px solid #ffffff',
              color: '#fff',
            }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (!startedAddingName) setStartedAddingName(true);
            }}
          />
          {nameError ? (
            <Col
              className="col-3 mt-5 m-4 py-2 text-center"
              style={{
                backgroundColor: 'red',
                border: '2px solid #ffffff',
                color: '#fff',
              }}
            >
              Error
            </Col>
          ) : (
            <Col className="col-3 mt-5 m-4 py-2 text-center" />
          )}
        </Row>

        <Row className="col-10 justify-content-between">
          <Col className="bluecolumn col-3 m-4 mt-5 py-2 text-center">
            Surname:
          </Col>
          <input
            className="col-3 mt-5 m-4 py-2 text-center"
            style={{
              backgroundColor: 'gray',
              border: '2px solid #ffffff',
              color: '#fff',
            }}
            value={surname}
            onChange={(e) => {
              setSurname(e.target.value);
              if (!startedAddingSurname) setStartedAddingSurname(true);
            }}
          />
          {surnameError ? (
            <Col
              className="col-3 mt-5 m-4 py-2 text-center"
              style={{
                backgroundColor: 'red',
                border: '2px solid #ffffff',
                color: '#fff',
              }}
            >
              Error
            </Col>
          ) : (
            <Col className="col-3 mt-5 m-4 py-2 text-center" />
          )}
        </Row>

        <Row className="col-10 justify-content-between">
          <Col className="bluecolumn col-3 m-4 mt-5 py-2 text-center">Age:</Col>
          <input
            className="col-3 mt-5 m-4 py-2 text-center"
            style={{
              backgroundColor: 'gray',
              border: '2px solid #ffffff',
              color: '#fff',
            }}
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              if (!startedAddingAge) setStartedAddingAge(true);
            }}
          />
          {ageError ? (
            <Col
              className="col-3 mt-5 m-4 py-2 text-center"
              style={{
                backgroundColor: 'red',
                border: '2px solid #ffffff',
                color: '#fff',
              }}
            >
              Error
            </Col>
          ) : (
            <Col className="col-3 mt-5 m-4 py-2 text-center" />
          )}
        </Row>

        <Row className="row">
          <Col className="col-12 d-flex text-center">
            <Col className="bluecolumn col-11 py-4 m-4">
              {name && surname && `Hello ${name} ${surname} !`}
            </Col>
          </Col>
        </Row>

        <Row>
          <Col className="col-10 d-flex justify-content-center mt-3 mb-5">
            <Col className="col-3 mb-3">
              <Button
                variant="success"
                className="col-12 h-100 py-2"
                style={{ border: '2px solid #ffffff' }}
                onClick={handleSubmit}
              >
                Save
              </Button>
            </Col>
          </Col>
        </Row>
      </Page>
    </>
  );
};

export default PageOne;
