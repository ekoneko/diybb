import React from 'react'

import './style.scss'
import Avatar from '../../Common/Avatar/Avatar'

export default class Post extends React.Component {
  render() {
    return (
      <div className="account-card">
        <Avatar size={'40%'} sharp="circle"></Avatar>
        <div className="name text-center">Kaze</div>
        <div className="info">
          <div className="item">
            <div className="label">帖子</div>
            <div className="value">20</div>
          </div>
          <div className="item">
            <div className="label">积分</div>
            <div className="value">200</div>
          </div>
        </div>
      </div>
    )
  }
}
