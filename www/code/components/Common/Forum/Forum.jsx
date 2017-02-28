import React from 'react'
import {Link} from 'react-router'

import './style.scss'

export default class Forum extends React.Component {
  render() {
    return (
      <div className="forum">
        <Link to="/f/1">
          <div className="title">
            <div className="icon"></div>
            <span className="text">SAPC++/NEOLITHICSAPC++/NEOLITHICSAPC++/NEOLITHIC</span>
          </div>
          <div className="tag">
            2016-02-02 12:12
          </div>
        </Link>
      </div>
    )
  }
}
