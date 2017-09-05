import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import AdminReducer from './reducers/admin';

//content
import { messageData } from './data/data';


import './stylesheets/index.css';
import './stylesheets/buttons.css';
//=============================================================\


let message = {};
Object.keys(messageData).forEach(k =>
  message[k] = ''
);

const initial = {
  project: -1,
  message: message,
  current: 'about',
  last: 0
}


const store = createStore(
  AdminReducer, initial, applyMiddleware(thunk)
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
