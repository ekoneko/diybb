import React from 'react'
import {connect} from 'react-redux'
import {Grid, Col, Panel} from 'react-bootstrap'

import {
  postHome as postHomeAction,
  getSetting as getSettingAction,
  getRecommend as getRecommendAction,
} from 'store/actions'
import Header from '../Header/Header'
import List from '../../globals/List/List'
import ForumPanel from '../../globals/ForumPanel/ForumPanel'

const PAGE_SIZE = 20

@connect(
  ({
     postHome,
     setting,
     forumRecommend,
  }) => ({
    model: {
      postHome,
      setting,
      forumRecommend,
    }
  }),
  dispatch => ({dispatch}),
)
export default class Home extends React.PureComponent {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(getSettingAction(['announce']))
    dispatch(getRecommendAction())
    this.request(1)
  }

  handlePageTo = (page) => {
    this.request(page)
  }

  request(page) {
    const {dispatch} = this.props
    dispatch(postHomeAction(page, PAGE_SIZE))
  }

  render() {
    const {
      model: {
        postHome: {
          loaded: postLoaded,
          list = [],
          offset,
          limit,
          total,
        },
        setting: {announce = ''},
        forumRecommend: {
          loaded: forumLoaded,
          data: forumData
        }
      }
    } = this.props
    return (<div>
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
                showChannel
              />
            )}
          </div>
        </Col>
        <Col xs={3}>
          <Panel header="公告">
            {announce}
          </Panel>
          {forumLoaded && (
            <ForumPanel data={forumData} />
          )}
        </Col>
      </Grid>
    </div>)
  }
}
