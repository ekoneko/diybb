import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

export default function Time(props) {
  const {
    date,
    format,
  } = props
  if (!date) {
    return <span></span>
  }
  return <span>{moment(date).format(format)}</span>
}
Time.propTypes = {
  date: PropTypes.string,
  format: PropTypes.string,
}
Time.defaultProps = {
  date: '',
  format: 'YYYY-MM-DD hh:mm',
}
