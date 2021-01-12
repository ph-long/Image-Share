/* moment library that gets time and date
  base64 coverts imgs
  redux-thunk gets async redux
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import reducers from './reducers';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

// wrapping App in Provider gives App access to the redux
ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById("root")
  );