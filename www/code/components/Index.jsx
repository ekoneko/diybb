import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import Channel from './containers/Channel/Channel'
import Post from './containers/Post/Post'
import PostAdd from './containers/Post/Add'
import Account from './containers/Account/Account'
import AccountSetting from './containers/Account/Setting'

export default function Index() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/f/:id" component={Channel} />
      <Route path="/p/:id" component={Post} />
      <Route path="/f/add/:id" component={PostAdd} />
      <Route path="/account/setting" component={AccountSetting} />
      <Route path="/account(/:id)" component={Account} />
    </Router>
  )
}
