import React from 'react';
import 'normalize.css';

import Root from './Root';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './services/store';

import '../styles/fonts.css'; // Fonts

const app = document.getElementById('root');

if (app) {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Root />
      </ConnectedRouter>
    </Provider>,
    app,
  );
}