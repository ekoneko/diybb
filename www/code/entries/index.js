import 'jquery'
import 'initialize-css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'lodash'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import Index from 'components/Index'
import 'style/fonts/font.css'
import 'style/index.scss'
import * as reducers from '../store/reducers/index'

function storeGenerator() {
  const combinedReducer = combineReducers(reducers);
  return createStore(
    combinedReducer,
    applyMiddleware(thunkMiddleware)
  );
}

const rootDOM = document.createElement('div');
document.body.appendChild(rootDOM);

const store = storeGenerator();
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Index />
    </HashRouter>
  </Provider>, rootDOM
);

// load TinyMCE
window.addEventListener('load', () => {
  const script = document.createElement('script');
  script.src = '/editor.js';
  script.onload = () => {
    window.dispatchEvent(new Event('tinymceReady'));
  };
  document.body.appendChild(script);
  const link = document.createElement('link');
  link.href = '/editor.style.css';
  link.rel = 'stylesheet';
  document.body.appendChild(link);
});
