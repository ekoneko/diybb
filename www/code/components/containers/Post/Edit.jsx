import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  postContent as postContentAction,
  postEdit as postEditAction,
} from 'store/actions'

import Header from '../Header/Header'
import PostForm from './PostForm/PostForm'

@connect(
  ({
    postContent,
    userAccount,
  }) => ({
    model: {
      postContent,
      userAccount,
    }
  }),
  dispatch => ({dispatch}),
)
export default class PostAdd extends React.PureComponent {
  static propTypes = {
    routeParams: PropTypes.shape({
      id: PropTypes.string,
    })
  }

  static defaultProps = {
    routeParams: {}
  }

  componentWillMount() {
    const {
      dispatch,
      routeParams: {id},
    } = this.props
    dispatch(postContentAction(id))
  }

  componentWillUpdate(newProps) {
    const {
      model: {
        postContent: {userId},
        userAccount: {id},
      },
      router,
    } = newProps

    if (!this.goingBack && id && userId && id !== userId) {
      alert('不能编辑他人的文章!')
      this.goingBack = true
      router.goBack()
    }
  }
  goingBack = false

  handleSubmit = (params) => {
    const {
      dispatch,
      router,
      routeParams: {id},
    } = this.props
    dispatch(postEditAction(id, params)).then(() => {
      router.push(`/p/${id}`)
    })
  }

  render() {
    const {
      model: {
        postContent: {title = '', content = ''}
      }
    } = this.props;
    return (
      <div>
        <Header />
        <PostForm
          onSubmit={this.handleSubmit}
          title={title}
          content={content}
        />
      </div>
    )
  }
}
