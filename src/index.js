import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import handleNewMessage from './sagas/index';
import setupSocket from './sockets';
import username from './utils/name';
import usercolor from './utils/color';
import avatar from './utils/avatar';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
const socket = setupSocket(store.dispatch, username, usercolor, avatar);

sagaMiddleware.run(handleNewMessage, { socket, username, usercolor, avatar });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
