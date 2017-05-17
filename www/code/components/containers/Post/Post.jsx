import React from 'react'
import {Grid, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import './style.scss'
import {
  postContent as postContentAction
} from 'store/actions'
import Header from '../Header/Header'
import AccessCard from '../../globals/AccessCard/AccessCard'
import Article from '../../globals/Article/Article'
import Comment from '../../globals/Comment/Comment'

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
  componentWillMount() {
    const {
      routeParams: {id},
      dispatch,
    } = this.props

    dispatch(postContentAction(id))
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
            <Article content={postContent}></Article>
            <Comment></Comment>
          </Col>
          <Col xs={3}>
            <AccessCard />
          </Col>
        </Grid>
      </div>
    )
  }
}
