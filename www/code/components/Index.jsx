import React from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import SignUp from './containers/SignUp/SignUp'
import Channel from './containers/Channel/Channel'
import ChannelList from './containers/Channel/List'
import Post from './containers/Post/Post'
import PostAdd from './containers/Post/Add'
import PostEdit from './containers/Post/Edit'
import Account from './containers/Account/Account'
import AccountSetting from './containers/Account/Setting'

export default function Index() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/f" components={ChannelList} />
      <Route exact path="/f/:id" component={Channel} />
      <Route exact path="/p/:id" component={Post} />
      <Route exact path="/p/add/:channelId" component={PostAdd} />
      <Route exact path="/p/edit/:id" component={PostEdit} />
      <Route exact path="/account/setting" component={AccountSetting} />
      <Route exact path="/account(/:id)" component={Account} />
    </Switch>
  )
}
