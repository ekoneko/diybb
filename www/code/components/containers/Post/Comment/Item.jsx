import React from 'react'
import PropTypes from 'prop-types'
import {DropdownButton, MenuItem} from 'react-bootstrap'

import Avatar from '../../../globals/Avatar/Avatar'
import Time from '../../../globals/Time'

export default function Item(props) {
  const {
    id,
    userId,
    userName,
    content,
    currentUserId,
    onDelete,
    updatedAt,
  } = props
  return (
    <div className="comment-item">
      {currentUserId === userId && (
        <div style={{position: 'absolute', right: 0}}>
          <DropdownButton
            id={`comment_dropdown_${id}`}
            noCaret bsStyle="link"
            title={<div className="material-icons">more_vert</div>}
          >
            <MenuItem onClick={() => onDelete(id)}>删除</MenuItem>
          </DropdownButton>
        </div>
      )}
      <Avatar
        id={userId}
        size={30}
        sharp="circle"
        name={userName}
      />
      <div className="info">
        <span className="tag">{userName}</span>
        <span className="tag">
          <Time date={updatedAt} />
        </span>
      </div>
      <div className="text" dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}
Item.propTypes = {
  id: PropTypes.number,
  userId: PropTypes.number,
  currentUserId: PropTypes.number,
  userName: PropTypes.string,
  content: PropTypes.string,
  onDelete: PropTypes.func,
  updatedAt: PropTypes.string,
}
Item.defaultProps = {
  id: 0,
  userId: 0,
  currentUserId: 0,
  userName: '',
  content: '',
  onDelete: () => {},
  updatedAt: '',
}
