import React from 'react'

import {Grid, Col, Panel} from 'react-bootstrap'

import Header from '../Header/Header'
import List from '../../globals/List/List'

export default function Channel(props) {
  return (
    <div>
      <Header />
      <Grid>
        <Col xs={9}>
          <div className="list-container">
            <List></List>
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
