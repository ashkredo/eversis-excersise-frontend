import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { initializeApp } from 'redux/reducers/appReducer';
import store from 'redux/helpers/store';
import Home from 'screens/pages/Home';
import NotFound from 'screens/pages/NotFound';

const App = (props) => {
  useEffect(() => {
    if (!props.initialized) props.initializeApp();
  });
  if (!props.initialized) return <h1>Preloader</h1>;
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/home" exact render={() => <Home />} />
        <Route render={() => <NotFound />} />
      </Switch>
    </div>
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
