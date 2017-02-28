import React from 'react'
import { Router, Route, hashHistory } from 'react-router'

import Home from './Home/Home'
import Channel from './Channel/Channel'
import Post from './Post/Post'

export default class Index extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/f/:id" component={Channel} />
        <Route path="/p/:id" component={Post} />
      </Router>
    )
  }
}
