import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {Grid, Col, Panel} from 'react-bootstrap'

import {
  postForum as postForumAction,
} from 'store/actions'
import Header from '../Header/Header'
import List from '../../globals/List/List'

const PAGE_SIZE = 20

@connect(
  ({
     postForum,
  }) => ({
    model: {
      postForum,
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
      model: {
        postForum: {
          loaded: postLoaded,
          list = [],
          offset,
          limit,
          total,
        },
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
            <Panel header="论坛名称">
              论坛的介绍
            </Panel>
          </Col>
        </Grid>
      </div>
    )
  }
}
