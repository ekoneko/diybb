import React from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', error, info)
    if (window.Raven && window.Raven.captureException) {
      window.Raven.captureException(error, { extra: info });
    }
  }

  render() {
    return this.props.children
  }
}
