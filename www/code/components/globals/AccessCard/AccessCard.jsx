import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'
import Avatar from '../Avatar/Avatar'

export default function AccessCard(props) {
  const {
    userId,
    userName,
    userScore,
    postCount,
  } = props;
  return (
    <div className="account-card">
      <Avatar
        size={'40%'}
        sharp="circle"
        name={userName}
        id={userId}
        style={{fontSize: '3rem'}}
      ></Avatar>
      <div className="name text-center">{userName}</div>
      <div className="info">
        <div className="item">
          <div className="label">帖子</div>
          <div className="value">{postCount}</div>
        </div>
        <div className="item">
          <div className="label">积分</div>
          <div className="value">{userScore}</div>
        </div>
      </div>
    </div>
  )
}
AccessCard.propTypes = {
  userId: PropTypes.number,
  userName: PropTypes.string,
  userScore: PropTypes.number,
  postCount: PropTypes.number,
}
AccessCard.defaultProps = {
  userId: 0,
  userName: '',
  userScore: 0,
  postCount: 0,
}
