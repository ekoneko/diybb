import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

export default function Article(props) {
  const {
    title,
    content,
  } = props
  return (
    <div className="article">
      <h1>{title}</h1>
      <article dangerouslySetInnerHTML={{__html: content}}></article>
    </div>
  )
}
Article.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}
Article.defaultProps = {
  title: '',
  content: '',
}
