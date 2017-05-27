import React from 'react'
import {Grid, Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {
  postContent as postContentAction,
} from 'store/actions'

import Header from '../Header/Header'
import AccessCard from '../../globals/AccessCard/AccessCard'
import Article from '../../globals/Article/Article'
import Comment from './Comment/Comment'

@connect(
  ({
     postContent,
  }) => ({
    model: {
      postContent,
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
      model: {postContent},
    } = this.props
    return (
      <div>
        <Header />
        <Grid>
          <Col xs={9}>
            {this.renderContent()}
          </Col>
          <Col xs={3}>
            <AccessCard
              userId={postContent.userId}
              userName={postContent.userName}
            />
          </Col>
        </Grid>
      </div>
    )
  }
}
