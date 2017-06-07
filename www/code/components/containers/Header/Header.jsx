import React, {PropTypes} from 'react'
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
  static propTypes = {
    forumId: PropTypes.number,
    forumName: PropTypes.string,
  }

  static defaultProps = {
    forumId: 0,
    forumName: '',
  }

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

  renderSubNav() {
    const {forumId, forumName} = this.props
    if (!forumId) {
      return null
    }
    return (
      <div className="sub-nav">
        / <Link to={`/f/${forumId}`}>{forumName}</Link>
      </div>
    )
  }

  render() {
    return (
      <div className="header">
        <div className="logo">
          <Link to="/">{GLOBALS.LOGO}</Link>
        </div>
        {this.renderSubNav()}
        {this.renderAvatar()}
      </div>
    )
  }
}
