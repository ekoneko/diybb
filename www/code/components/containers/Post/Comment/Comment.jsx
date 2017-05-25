import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  commentList as commentListAction,
  commentAdd as commentAddAction,
} from 'store/actions'

import './style.scss'
import Form from './Form'
import List from './List'

const PAGE_SIZE = 20

@connect(
  ({
     commentList,
  }) => ({
    model: {
      commentList,
    }
  }),
  dispatch => ({dispatch}),
)
export default class Comment extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
  }

  componentWillMount() {
    this.requestList(1)
  }

  requestList(page) {
    const {id, dispatch} = this.props
    dispatch(commentListAction(id, {
      page,
      limit: PAGE_SIZE,
    }))
  }

  handleSubmit = content => {
    const {id, dispatch} = this.props
    return dispatch(commentAddAction(id, content))
      .catch(() => {
        alert('评论失败')
      })
  }

  handlePageTo = (page) => {
    this.requestList(page)
  }

  render() {
    const {
      model: {commentList: {
        loaded,
        list,
        offset,
        limit,
        total,
      }},
    } = this.props
    return (
      <div className="comment-container">
        <Form onSubmit={this.handleSubmit} />
        {loaded && (
          <List
            offset={offset}
            list={list}
            limit={limit}
            total={total}
            onPageTo={this.handlePageTo}
          />
        )}
      </div>
    )
  }
}
