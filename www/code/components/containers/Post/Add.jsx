import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  postAdd as postAddAction,
  getForumDetail as getForumDetailAction,
} from 'store/actions'

import Header from '../Header/Header'
import PostForm from './PostForm/PostForm'

@connect(
  ({
    forumDetail,
  }) => ({
    model: {
      forumDetail,
    }
  }),
  dispatch => ({dispatch}),
)
export default class PostAdd extends React.PureComponent {
  static propTypes = {
    routeParams: PropTypes.shape({
      channelId: PropTypes.string,
    })
  }

  static defaultProps = {
    routeParams: {}
  }

  componentWillMount() {
    const {
      dispatch,
      routeParams: {channelId},
    } = this.props
    dispatch(getForumDetailAction(channelId))
  }

  handleSubmit = (params) => {
    const {
      dispatch,
      router,
      routeParams: {channelId},
    } = this.props
    dispatch(postAddAction({
      ...params,
      channelId,
    })).then(() => {
      router.goBack()
    })
  }

  render() {
    const {
      model: {
        forumDetail: {
          id: forumId = 0,
          name: forumName = '',
        }
      },
    } = this.props
    return (
      <div>
        <Header forumId={forumId} forumName={forumName} />
        <PostForm
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}