import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  postContent as postContentAction,
  postEdit as postEditAction,
  getForumDetail as getForumDetailAction,
} from 'store/actions'

import Header from '../Header/Header'
import PostForm from './PostForm/PostForm'

@connect(
  ({
    postContent,
    userAccount,
    forumDetail,
  }) => ({
    model: {
      postContent,
      userAccount,
      forumDetail,
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

  componentWillReceiveProps(newProps) {
    const {dispatch} = this.props
    const newChannelId = newProps.model.postContent.channelId
    const srcChannelId = this.props.model.postContent.channelId
    if (newChannelId !== srcChannelId) {
      dispatch(getForumDetailAction(newChannelId))
    }
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