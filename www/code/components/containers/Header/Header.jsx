import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {
  userAccount as userAccountAction,
  userLogout as userLogoutAction,
} from 'store/actions'
import {USER_STATUS} from 'consts/User'
import Logined from './Account/Logined'
import UnLogin from './Account/UnLogin'
import './style.scss'


@connect(
  ({userAccount}) => ({
    model: {
      userAccount,
    }
  }),
  dispatch => ({dispatch}),
)
export default class Header extends React.PureComponent {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(userAccountAction())
  }

  handleLogout = () => {
    const {dispatch} = this.props
    dispatch(userLogoutAction())
  }

  renderAvatar() {
    const {model: {
      userAccount: {id, name, state}
    }} = this.props

    return (
      <div className="avatar-panel">
        {state === USER_STATUS.LOGINED && (
          <Logined
            id={id}
            name={name}
            logout={this.handleLogout}
          />
        )}
        {state === USER_STATUS.LOGINED || (
          <UnLogin />
        )}
      </div>
    )
  }

  render() {
    return (
      <div className="header">
        <h1 className="logo">
          <Link to="/">Logo</Link>
        </h1>
        {this.renderAvatar()}
      </div>
    )
  }
}
