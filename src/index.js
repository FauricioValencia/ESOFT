import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './store/reducers/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const loggerPersonal = ({ dispatch, getState }) => next => (action) => {
  console.log('estado anterios: ', getState());
  console.log('enviando accion: ', action);
  const result = next(action);
  console.log('nueva accion: ', getState());
  return result;
};

const store = createStore(
  reducer,
  {},
  applyMiddleware(loggerPersonal, logger, thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
