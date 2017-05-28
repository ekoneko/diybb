import React from 'react'
import PropTypes from 'prop-types'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import {Link} from 'react-router'

import Avatar from '../../../globals/Avatar/Avatar'

export default function Logined(props) {
  const {id, name, logout} = props
  return (
    <DropdownButton
      id="account-setting"
      noCaret bsStyle="link"
      title={(
        <Avatar sharp="circle" name={name} id={id} />
      )}
    >
      <MenuItem><Link to="/account/setting">设置</Link></MenuItem>
      <MenuItem onClick={logout}>登出</MenuItem>
    </DropdownButton>
  )
}
Logined.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  logout: PropTypes.func,
}
Logined.defaultProps = {
  logout: () => {}
}
