import React from 'react'
import PropTypes from 'prop-types'
import { Pagination as RBPagination } from 'react-bootstrap'

export default function Pagination(props) {
  const {
    items,
  } = props
  const injectedProps = {}

  if (items <= 1) {
    return null
  }

  if (items > 10) {
    injectedProps.maxButtons = 5
    injectedProps.ellipsis = true
    injectedProps.first = true
    injectedProps.last = true
  }

  const combinedProps = {
    ...injectedProps,
    ...props,
  }

  return (
    <RBPagination {...combinedProps} />
  )
}
Pagination.propTypes = {
  items: PropTypes.number,
}

Pagination.defaultProps = {
  items: 0,
}
