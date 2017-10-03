/* @flow */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPage from './scenes/MainPage';
import Licence from './scenes/Licence';


const Root = () =>
  <Switch>

    <Route from={"/volicsky-prukaz"} component={Licence}/>
    <Route path="/" component={MainPage} />

  </Switch>;

export default Root;
