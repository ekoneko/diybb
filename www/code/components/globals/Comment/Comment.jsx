import React from 'react'

import './style.scss'
import Form from './Form'
import List from './List'

export default class Comment extends React.PureComponent {
  render() {
    return (
      <div className="comment-container">
        <Form></Form>
        <List></List>
      </div>
    )
  }
}
