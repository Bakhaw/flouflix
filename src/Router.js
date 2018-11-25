import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Navbar from './components/Navbar';

function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default Router;
