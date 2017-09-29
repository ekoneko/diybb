import React from 'react'
import PropTypes from 'prop-types'
import {Panel} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import Forums from '../Forum/Forums'

function ForumPanelHead(props) {
  const {noMore} = props
  return (
    <div>
      <span className="pull-left">论坛</span>
      {noMore || (
        <span className="pull-right">
          <Link to="/f" style={{color: '#fff'}}>更多&gt;</Link>
        </span>
      )}
    </div>
  )
}
ForumPanelHead.propTypes = {
  noMore: PropTypes.bool,
}
ForumPanelHead.defaultProps = {
  noMore: false,
}

export default function ForumPanel(props) {
  const {noMore, data} = props
  return (
    <Panel header={<ForumPanelHead noMore={noMore} />}>
      <Forums data={data} />
    </Panel>
  )
}
ForumPanel.propTypes = {
  noMore: PropTypes.bool,
  data: Forums.propTypes.data,
}
ForumPanel.defaultProps = {
  noMore: false,
  data: Forums.defaultProps.data,
}
