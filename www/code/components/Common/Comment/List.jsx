import React from 'react'

import './style.scss'
import Item from './Item'

export default class List extends React.Component {
  render() {
    return (
      <div className="list">
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    )
  }
}
