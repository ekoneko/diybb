import React from 'react'
import {Grid, Col, Panel} from 'react-bootstrap'

import Header from '../Header/Header'
import List from '../List/List'
import Forum from '../Common/Forum/Forum'

export default class Home extends React.PureComponent {
  render() {
    return (<div>
      <Header />
      <Grid>
        <Col xs={9}>
          <div className="list-container">
            <List></List>
          </div>
        </Col>
        <Col xs={3}>
          <Panel header="公告">
            这里是公告
          </Panel>
          <Panel header="论坛">
            <Forum />
            <Forum />
          </Panel>
        </Col>
      </Grid>
    </div>)
  }
}
