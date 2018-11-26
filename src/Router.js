import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import Movies from './screens/Movies';
import Navbar from './components/Navbar';

function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/films' component={Movies} />
          <Route path='/' component={Home} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default Router;
