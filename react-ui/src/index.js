import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import AdminReducer from './reducers/admin';

//content
import { data, messageData } from './data/data';

// import '/bootstrap/dist/css/bootstrap.css';
// import '/bootstrap/dist/css/bootstrap-theme.css';
import './stylesheets/index.css';
//=============================================================\

let sections = {};
Object.keys(data).forEach(k =>
  sections[k] = {
    min: 0,
    max: 0
  }
);

let message = {};
Object.keys(messageData).forEach(k =>
  message[k] = ''
);

const initial = {
  project: -1,
  message: message,
  current: 'about',
  last: 0,
  sections: sections
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
