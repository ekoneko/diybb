import React from 'react'
import {Grid, Col, DropdownButton, MenuItem} from 'react-bootstrap'
import PropTypes from 'prop-types'

import withRequestHoc from './withRequestHoc'
import Header from '../Header/Header'
import AccessCard from '../../globals/AccessCard/AccessCard'
import Article from '../../globals/Article/Article'
import Comment from './Comment/Comment'

@withRequestHoc
export default class Post extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({id: PropTypes.string})
    })
  }

  static defaultProps = {
    match: {params: {}}
  }

  handleEdit = () => {
    const {
      match: {params: {id}},
      history,
    } = this.props
    history.push(`/p/edit/${id}`)
  }

  renderMenu() {
    const {
      model: {
        userAccount: {id},
        postContent: {userId},
      }
    } = this.props
    if (!id || !userId || (id !== userId)) {
      return null
    }
    return (
      <div style={{position: 'absolute', right: '1rem'}}>
        <DropdownButton
          noCaret bsStyle="link"
          title={(<div className="material-icons">menu</div>)}
        >
          <MenuItem onClick={this.handleEdit}>编辑</MenuItem>
        </DropdownButton>
      </div>
    )
  }

  renderContent() {
    const {
      match: {params: {id}},
      model: {postContent},
    } = this.props
    if (!id) {
      // TODO: no id
      return null
    }
    return (
      <div>
        {this.renderMenu()}
        <Article
          title={postContent.title}
          content={postContent.content}
        ></Article>
        <Comment id={+id} />
      </div>
    )
  }

  render() {
    const {
      model: {
        postContent,
        forumDetail: {
          id: forumId = 0,
          name: forumName = '',
        }
      },
    } = this.props
    return (
      <div>
        <Header forumId={forumId} forumName={forumName} />
        <Grid>
          <Col sm={9}>
            {this.renderContent()}
          </Col>
          <Col sm={3}>
            <AccessCard
              userId={postContent.userId}
              userName={postContent.userName}
              postCount={postContent.count}
            />
          </Col>
        </Grid>
      </div>
    )
  }
}
