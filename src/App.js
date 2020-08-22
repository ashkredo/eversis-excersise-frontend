import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from 'redux/reducers/appReducer';
import store from 'redux/helpers/store';
import Container from 'react-bootstrap/Container';
import Preloader from 'screens/components/common/Preloader';
import Header from 'screens/components/Header';
import Home from 'screens/pages/Home';
import NotFound from 'screens/pages/NotFound';
import PageOne from 'screens/pages/PageOne';

const App = (props) => {
  useEffect(() => {
    if (!props.initialized) props.initializeApp();
  });
  if (!props.initialized) return <Preloader />;
  return (
    <Container className="App" fluid="false">
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Header />
              <Home />
            </>
          )}
        />
        <Route
          path="/home"
          exact
          render={() => (
            <>
              <Header />
              <Home />
            </>
          )}
        />
        <Route
          path="/pageone"
          exact
          render={() => (
            <>
              <Header />
              <PageOne />
            </>
          )}
        />
        <Route render={() => <NotFound />} />
      </Switch>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const EversisExcersiseApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default EversisExcersiseApp;
