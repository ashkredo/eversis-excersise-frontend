import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'screens/pages/Home';
import NotFound from 'screens/pages/NotFound';

const App = () => {
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

const EversisExcersiseApp = (props) => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default EversisExcersiseApp;
