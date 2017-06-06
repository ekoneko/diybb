import React from 'react'
import {connect} from 'react-redux'
import {Grid, Col, Panel} from 'react-bootstrap'
import {
  getForumList as getForumListAction,
  getSetting as getSettingAction,
  getRecommend as getRecommendAction,
} from 'store/actions'
import ForumPanel from '../../globals/ForumPanel/ForumPanel'
import Header from '../Header/Header'
import List from './ChannelList/List'

const PAGE_SIZE = 20

@connect(
  ({
    forumList,
    setting,
    forumRecommend,
  }) => ({
    model: {
      forumList,
      setting,
      forumRecommend,
    }
  }),
  dispatch => ({dispatch}),
)
export default class Channel extends React.PureComponent {
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
    dispatch(getForumListAction(page, PAGE_SIZE))
  }

  render() {
    const {
      model: {
        forumList: {
          loaded,
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
    return (
      <div>
        <Header />
        <Grid>
          <Col xs={9}>
            <div className="list-container">
              {loaded && (
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
            <Panel header="公告">
              {announce}
            </Panel>
            {forumLoaded && (
              <ForumPanel data={forumData} noMore />
            )}
          </Col>
        </Grid>
      </div>
    )
  }
}
