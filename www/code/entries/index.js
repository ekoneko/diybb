import $ from 'jquery'
import 'initialize-css'
import 'bootstrap/dist/css/bootstrap.css'
import 'imports-loader?jQuery!bootstrap/dist/js/bootstrap'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import 'imports-loader?jQuery!bootstrap-material-design/dist/js/material'
import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, bindActionCreators} from 'redux'
import thunkMiddleware from 'redux-thunk'

import 'style/index.scss'
import * as reducers from 'reducers/index'
import * as actions from 'actions/index'
import Index from 'components/Index'

function storeGenerator() {
  const reducersArray = Object.keys(reducers).map(key => reducers[key]);
  const combinedReducer = combineReducers(reducersArray);
  return createStore(
    combinedReducer,
    applyMiddleware(thunkMiddleware)
  );
}

function combineActions(store, actions) {
  const combinedActions = {};
  for (let key in actions) {
    if (actions.hasOwnProperty(key)) {
      combinedActions[key] = bindActionCreators(actions[key], store.dispatch);
    }
  }
  return combinedActions;
}

$.material.init();
const rootDOM = document.createElement('div');
document.body.appendChild(rootDOM);

const store = storeGenerator();
const App = connect(state => state)(Index);
App.childContextTypes = {
  actions: React.PropTypes.object
};
App.prototype.getChildContext = function() {
  return {actions: combineActions(store, actions)}
};
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootDOM
);
