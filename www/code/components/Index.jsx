import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Home from './Home/Home'
import Channel from './Channel/Channel'
import Post from './Post/Post'
import Account from './Account/Account'

export default function Index() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="/f/:id" component={Channel} />
      <Route path="/p/:id" component={Post} />
      <Route path="/account(/:id)" component={Account}/>
    </Router>
  )
}
