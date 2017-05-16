import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

import Avatar from '../Avatar/Avatar'
import Time from '../Time'

export default function Item(props) {
  const {
    item: {
      id,
      title,
      userId,
      userName,
      createdAt,
      count,
    }
  } = props
  return (
    <div className="item">
      <Link to={`/p/${id}`} className="title">{title}</Link>
      <div className="info">
        <div className="tag">
          创建于
          <Time date={createdAt}></Time>
        </div>
        <div className="tag">
          <Avatar size={16} id={userId} name={userName}></Avatar>
        </div>
        {!!count && (
          <div className="tag">
            回复 {count}
          </div>
        )}
      </div>
    </div>
  )
}
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    userId: PropTypes.number,
    username: PropTypes.string,
    createdAt: PropTypes.string,
    count: PropTypes.number,
  }).isRequired
}
