import React from 'react'
import { Pagination } from 'react-bootstrap'

import './style.scss'
import Item from './Item'

export default class List extends React.PureComponent {
  render() {
    return (
      <div className="list">
        <Item />
        <Item />
        <Item />
        <div className="page-container text-right">
          <Pagination items={10} activePage={1}></Pagination>
        </div>
      </div>
    )
  }
}
