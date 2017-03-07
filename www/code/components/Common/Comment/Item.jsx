import React from 'react'

import Avatar from '../../Common/Avatar/Avatar'

export default class Item extends React.PureComponent {
  render() {
    return (
      <div className="comment-item">
        <Avatar size={45} sharp="circle"></Avatar>
        <div className="text">some comment.</div>
      </div>
    )
  }
}
