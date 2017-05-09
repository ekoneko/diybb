import React from 'react'
import {Link} from 'react-router'

import Avatar from '../Avatar/Avatar'

export default class Item extends React.PureComponent {
  render() {
    return (
      <div className="item">
        <Link to="/p/1" className="title">凄美之星映心中，霾雨之人得救赎</Link>
        <div className="info">
          <div className="tag">
            创建于 2015-02-02
          </div>
          <div className="tag">
            <Avatar size={16} name="kaze"></Avatar>
          </div>
          <div className="tag">
            回复 5
          </div>
        </div>
      </div>
    )
  }
}
