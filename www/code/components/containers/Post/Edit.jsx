import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {postEdit as postEditAction} from 'store/actions'

import withRequestHoc from './withRequestHoc'
import Header from '../Header/Header'
import PostForm from './PostForm/PostForm'

@withRequestHoc
export default class PostEdit extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({id: PropTypes.string})
    })
  }

  static defaultProps = {
    match: {params: {}}
  }

  componentWillUpdate(newProps) {
    const {
      model: {
        postContent: {userId},
        userAccount: {id},
      },
      history,
    } = newProps

    if (!this.goingBack && id && userId && id !== userId) {
      alert('不能编辑他人的文章!')
      this.goingBack = true
      history.goBack()
    }
  }
  goingBack = false

  handleSubmit = (params) => {
    const {
      dispatch,
      history,
      match: {params: {id}},
    } = this.props
    dispatch(postEditAction(id, params)).then(() => {
      history.push(`/p/${id}`)
    })
  }

  render() {
    const {
      model: {
        postContent: {title = '', content = ''},
        forumDetail: {
          id: forumId = 0,
          name: forumName = '',
        }
      }
    } = this.props;
    return (
      <div>
        <Header forumId={forumId} forumName={forumName} />
        <PostForm
          onSubmit={this.handleSubmit}
          title={title}
          content={content}
        />
      </div>
    )
  }
}
