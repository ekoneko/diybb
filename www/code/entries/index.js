import $ from 'jQuery'
import 'initialize-css'
import 'bootstrap/dist/css/bootstrap.css'
import 'imports-loader?jQuery!bootstrap/dist/js/bootstrap'
import 'lodash'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
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
    <Index />
  </Provider>, rootDOM
);
