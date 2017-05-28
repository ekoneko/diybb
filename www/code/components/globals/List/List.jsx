import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'components/globals/Pagination/Pagination'

import './style.scss'
import Item from './Item'

export default function List(props) {
  const {
    list,
    total,
    offset,
    limit,
    onPageTo,
  } = props
  const pages = Math.ceil(total / limit)
  const activePage = offset / limit + 1
  return (
    <div className="list">
      {list.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <div className="page-container text-right">
        <Pagination
          items={pages}
          activePage={activePage}
          onSelect={onPageTo}
        ></Pagination>
      </div>
    </div>
  )
}
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  total: PropTypes.number,
  offset: PropTypes.number,
  limit: PropTypes.number,
  onPageTo: PropTypes.func,
}
List.defaultProps = {
  list: [],
  total: 0,
  offset: 0,
  limit: 0,
  onPageTo: () => {}
}
