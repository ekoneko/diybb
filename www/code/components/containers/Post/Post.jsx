import React from 'react'
import {Grid, Col, DropdownButton, MenuItem} from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  postContent as postContentAction,
  getForumDetail as getForumDetailAction,
} from 'store/actions'

import Header from '../Header/Header'
import AccessCard from '../../globals/AccessCard/AccessCard'
import Article from '../../globals/Article/Article'
import Comment from './Comment/Comment'

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
export default class Post extends React.PureComponent {
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
      routeParams: {id},
      dispatch,
    } = this.props

    if (id) {
      dispatch(postContentAction(id))
    }
  }

  componentWillReceiveProps(newProps) {
    const {dispatch} = this.props
    const newChannelId = newProps.model.postContent.channelId
    const srcChannelId = this.props.model.postContent.channelId
    if (newChannelId !== srcChannelId) {
      dispatch(getForumDetailAction(newChannelId))
    }
  }

  handleEdit = () => {
    const {
      routeParams: {id},
      router,
    } = this.props
    router.push(`/p/edit/${id}`)
  }

  renderMenu() {
    const {
      model: {
        userAccount: {id},
        postContent: {userId},
      }
    } = this.props
    if (!id || !userId || (id !== userId)) {
      return null
    }
    return (
      <div style={{position: 'absolute', right: '1rem'}}>
        <DropdownButton
          noCaret bsStyle="link"
          title={(<div className="material-icons">menu</div>)}
        >
          <MenuItem onClick={this.handleEdit}>编辑</MenuItem>
        </DropdownButton>
      </div>
    )
  }

  renderContent() {
    const {
      routeParams: {id},
      model: {postContent},
    } = this.props
    if (!id) {
      // TODO: no id
      return null
    }
    return (
      <div>
        {this.renderMenu()}
        <Article
          title={postContent.title}
          content={postContent.content}
        ></Article>
        <Comment id={+id} />
      </div>
    )
  }

  render() {
    const {
      model: {
        postContent,
        forumDetail: {
          id: forumId = 0,
          name: forumName = '',
        }
      },
    } = this.props
    return (
      <div>
        <Header forumId={forumId} forumName={forumName} />
        <Grid>
          <Col xs={9}>
            {this.renderContent()}
          </Col>
          <Col xs={3}>
            <AccessCard
              userId={postContent.userId}
              userName={postContent.userName}
              postCount={postContent.count}
            />
          </Col>
        </Grid>
      </div>
    )
  }
}
