import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router'

import {Grid, Col, Panel, Button} from 'react-bootstrap'

import {
  postForum as postForumAction,
  getForumDetail as getForumDetailAction,
} from 'store/actions'
import Header from '../Header/Header'
import List from '../../globals/List/List'

const PAGE_SIZE = 20

@connect(
  ({
     postForum,
     forumDetail,
  }) => ({
    model: {
      postForum,
      forumDetail,
    }
  }),
  dispatch => ({dispatch}),
)
export default class Channel extends React.PureComponent {
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
    dispatch(getForumDetailAction(id))
    this.request(1)
  }

  handlePageTo = (page) => {
    this.request(page)
  }

  request(page) {
    const {
      routeParams: {id},
      dispatch,
    } = this.props
    dispatch(postForumAction(id, page, PAGE_SIZE))
  }

  render() {
    const {
      routeParams: {id},
      model: {
        postForum: {
          loaded: postLoaded,
          list = [],
          offset,
          limit,
          total,
        },
        forumDetail: {
          name: forumName = '',
          description = '',
        }
      }
    } = this.props
    return (
      <div>
        <Header />
        <Grid>
          <Col xs={9}>
            <div className="list-container">
              {postLoaded && (
                <List
                  list={list}
                  offset={offset}
                  limit={limit}
                  total={total}
                  onPageTo={this.handlePageTo}
                />
              )}
            </div>
          </Col>
          <Col xs={3}>
            <Link to={`f/add/${id}`}>
              <Button
                className="btn-raised"
                bsStyle="danger"
                style={{
                  marginTop: 0,
                  width: '100%',
                }}
              >新文章</Button>
            </Link>
            <Panel header={forumName}>
              {description}
            </Panel>
          </Col>
        </Grid>
      </div>
    )
  }
}
