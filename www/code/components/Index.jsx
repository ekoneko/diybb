import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import Channel from './containers/Channel/Channel'
import Post from './containers/Post/Post'
import Account from './containers/Account/Account'

export default function Index() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/f/:id" component={Channel} />
      <Route path="/p/:id" component={Post} />
      <Route path="/account(/:id)" component={Account} />
    </Router>
  )
}
