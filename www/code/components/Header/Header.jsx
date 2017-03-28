import React from 'react'
import {Link} from 'react-router'
import {DropdownButton, MenuItem, Modal} from 'react-bootstrap'

import './style.scss'
import Avatar from '../Common/Avatar/Avatar'

function setting() {
  //
}

function logout() {
  //
}

export default function Header(props) {
  return (
    <div className="header">
      <h1 className="logo">
        <Link to="/">Logo</Link>
      </h1>
      <div className="avatar-panel">
        <DropdownButton noCaret bsStyle="link" title={<Avatar sharp="circle" />}>
          <MenuItem onClick={setting}>设置</MenuItem>
          <MenuItem onClick={logout}>登出</MenuItem>
        </DropdownButton>
      </div>
      <Modal
        show={false}
        aria-labelledby="contained-modal-title"
      >
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <a onClick={close}>Close</a>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
