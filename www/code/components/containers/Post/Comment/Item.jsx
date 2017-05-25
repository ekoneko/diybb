import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../../../globals/Avatar/Avatar'

export default function Item(props) {
  const {
    userName,
    content,
  } = props
  return (
    <div className="comment-item">
      <Avatar
        size={30}
        sharp="circle"
      />
      <div className="info">
        <span className="tag">{userName}</span>
        <span className="tag">2017-03-09</span>
      </div>
      <div className="text" dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}
Item.propTypes = {
  // userId: PropTypes.number,
  userName: PropTypes.string,
  content: PropTypes.string,
}
Item.defaultProps = {
  userId: 0,
  userName: '',
  content: '',
}
