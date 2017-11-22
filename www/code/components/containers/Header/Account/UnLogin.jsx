import React from 'react'
import {Link} from 'react-router-dom'

export default function UnLogin() {
  return (
    <div className="unlogin-panel">
      <Link to="/signup">注册</Link>
      <Link to="/login">登录</Link>
    </div>
  )
}
