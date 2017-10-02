import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

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
    match: PropTypes.shape({
      params: PropTypes.shape({id: PropTypes.string})
    })
  }

  static defaultProps = {
    match: {params: {}}
  }

  componentWillMount() {
    const {
      match: {params: {id}},
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
      match: {params: {id}},
      dispatch,
    } = this.props
    dispatch(postForumAction(id, page, PAGE_SIZE))
  }

  render() {
    const {
      match: {params: {id}},
      model: {
        postForum: {
          loaded: postLoaded,
          list = [],
          offset,
          limit,
          total,
        },
        forumDetail: {
          id: forumId = 0,
          name: forumName = '',
          description = '',
        }
      }
    } = this.props
    return (
      <div>
        <Header forumId={forumId} forumName={forumName} />
        <Grid>
          <Col sm={9}>
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
          <Col sm={3}>
            <Link to={`/p/add/${id}`}>
              <Button
                className="btn-raised"
                bsStyle="danger"
                style={{
                  marginTop: 0,
                  marginBottom: 8,
                  width: '100%',
                }}
              >新文章</Button>
            </Link>
            <Panel header={forumName}>
              {description || <span style={{color: '#999'}}>暂无公告</span>}
            </Panel>
          </Col>
        </Grid>
      </div>
    )
  }
}
