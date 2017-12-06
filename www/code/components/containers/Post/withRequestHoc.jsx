import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  postContent as postContentAction,
  getForumDetail as getForumDetailAction,
} from 'store/actions'

export default function withRequestHoc(WrappedComponent) {
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
  class RequestHoc extends React.Component {
    static propTypes = {
      match: PropTypes.shape({
        params: PropTypes.shape({id: PropTypes.string})
      }),
      children: PropTypes.element,
    }

    static defaultProps = {
      match: {params: {}},
      children: null,
    }

    componentWillMount() {
      const {
        match: {params: {id}},
        dispatch,
      } = this.props

      if (id) {
        // get content
        dispatch(postContentAction(id))
      }
    }

    componentWillReceiveProps(nextProps) {
      const {dispatch} = this.props
      const nextChannelId = nextProps.model.postContent.channelId
      const prevChannelId = this.props.model.postContent.channelId
      if (nextChannelId !== prevChannelId) {
        dispatch(getForumDetailAction(nextChannelId))
      }
    }

    render() {
      return <WrappedComponent {...this.props}>{this.props.children}</WrappedComponent>
    }
  }
  RequestHoc.displayName = `${WrappedComponent.displayName}WithRequest`
  RequestHoc.WrappedComponent = WrappedComponent
  return RequestHoc
}
