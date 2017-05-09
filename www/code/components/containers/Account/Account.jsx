import React from 'react'
import {Grid, Col, Media} from 'react-bootstrap'

import Header from '../Header/Header'
import List from '../../globals/List/List'
import AccessCard from '../../globals/AccessCard/AccessCard'

import './style.scss'

export default class Account extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Col xs={9}>
            <div className="account">
              <List></List>
            </div>
          </Col>
          <Col xs={3}>
            <AccessCard />
          </Col>
        </Grid>
      </div>
    )
  }
}
