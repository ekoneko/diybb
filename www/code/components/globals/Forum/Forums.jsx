import React from 'react'
import PropTypes from 'prop-types'

import Forum from './Forum'

export default function Forums(props) {
  const {data} = props
  return (
    <div>
      {data.map(item => {
        const {
          id,
          name,
          icon = ''
        } = item
        return (
          <Forum
            id={id}
            key={id}
            name={name}
            icon={icon}
          />
        )
      })}
    </div>
  )
}
Forums.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    icon: PropTypes.string
  }))
}
Forums.defaultProps = {
  data: [],
}
