import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  postAdd as postAddAction,
} from 'store/actions'

import Header from '../Header/Header'
import PostForm from './PostForm/PostForm'

@connect(
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
    return (
      <div>
        <Header />
        <PostForm
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
