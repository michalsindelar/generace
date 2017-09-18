import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [routerMiddleware(history)];

const logger = require('redux-logger').createLogger; // eslint-disable-line

middleware.push(logger({ collapsed: true }));

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;