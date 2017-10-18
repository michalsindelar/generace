/* @flow */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './scenes/MainPage';
import Team from './scenes/Team';


const Root = () =>
  <Switch>

    <Route path="/kdo-jsme" component={Team} />
    <Route path="/" component={MainPage} />

  </Switch>;

export default Root;
