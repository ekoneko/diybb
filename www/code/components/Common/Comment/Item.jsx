import React from 'react'

import Avatar from '../../Common/Avatar/Avatar'

export default class Item extends React.PureComponent {
  render() {
    return (
      <div className="comment-item">
        <Avatar size={30} sharp="circle"></Avatar>
        <div className="info">
          <span className="tag">kaze</span>
          <span className="tag">2017-03-09</span>
        </div>
        <div className="text">some comment.</div>
      </div>
    )
  }
}
