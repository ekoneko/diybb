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
    match: PropTypes.shape({
      params: PropTypes.shape({channelId: PropTypes.string})
    })
  }

  static defaultProps = {
    match: {params: {}}
  }

  componentWillMount() {
    const {
      dispatch,
      match: {params: {channelId}},
    } = this.props
    dispatch(getForumDetailAction(channelId))
  }

  handleSubmit = (params) => {
    const {
      dispatch,
      match: {params: {channelId}},
      history,
    } = this.props
    dispatch(postAddAction({
      ...params,
      channelId,
    })).then(() => {
      history.goBack()
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
