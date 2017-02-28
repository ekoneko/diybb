import React from 'react'
import {Grid, Col} from 'react-bootstrap'

import './style.scss'
import Header from '../Header/Header'
import AccessCard from '../Common/AccessCard/AccessCard'
import Article from '../Common/Article/Article'

export default class Post extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Col xs={9}>
            <Article></Article>
          </Col>
          <Col xs={3}>
            <AccessCard/>
          </Col>
        </Grid>
      </div>
    )
  }
}
