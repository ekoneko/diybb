import React from 'react'
import {Link} from 'react-router'

import './style.scss'
import Avatar from '../Common/Avatar/Avatar'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="logo">
          <Link to="/">Logo</Link>
        </h1>
        <div className="avatar-panel">
          <Avatar sharp="circle"></Avatar>
        </div>
      </div>
    )
  }
}
