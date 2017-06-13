import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

import './style.scss'
import Time from '../../globals/Time'

export default function Forum(props) {
  const {id, name, updatedAt} = props
  return (
    <div className="forum">
      <Link to={`/f/${id}`}>
        <div className="title">
          <span className="text">{name}</span>
        </div>
        <div className="tag">
          <Time date={updatedAt} />
        </div>
      </Link>
    </div>
  )
}
Forum.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  updatedAt: PropTypes.string,
}
Forum.defaultProps = {
  id: 0,
  name: '',
  updatedAt: '',
}
