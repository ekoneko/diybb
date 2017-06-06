import React from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'

export default function Item(props) {
  const {
    item: {
      id,
      name,
      description,
    }
  } = props
  return (
    <Link to={`/f/${id}`}>
      <div className="item">
        <div className="title">{name}</div>
      </div>
    </Link>
  )
}
Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired
}
