import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicContainer from '../containers/Public';
import PrivateContainer from '../containers/Private';
import NotFoundRedirectComponent from '../components/NotFoundRedirect';

const App: React.FC = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={PublicContainer} />
          <Route path="/signup" component={PublicContainer} />
          <Route path="/login" component={PublicContainer} />
          <Route exact={true} path="/" component={PrivateContainer} />
          <Route component={NotFoundRedirectComponent} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
