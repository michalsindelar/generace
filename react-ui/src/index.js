import React from 'react';
import 'normalize.css';

import Root from './Root';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './services/store';

// Dependencies from Adobe website
import '../styles/index.css';
import '../styles/website-general.css';

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