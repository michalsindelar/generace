/* @flow */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './scenes/MainPage';


const Root = () =>
  <Switch>

    <Route path="/" component={MainPage} />

  </Switch>;

export default Root;
