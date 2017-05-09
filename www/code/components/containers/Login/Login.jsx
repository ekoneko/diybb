import React from 'react'
import {connect} from 'react-redux'
import {USER_STATUS} from 'consts/User'
import {userLogin} from 'store/actions/index'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'

@connect(
  ({userAccount}) => ({userAccount}),
  dispatch => ({dispatch}),
)
export default class Login extends React.PureComponent {
  static propTypes = {
    userAccount: PropTypes.shape({
      lastError: PropTypes.shape({
        status: PropTypes.number,
        error: PropTypes.any,
      })
    }).isRequired,
  }

  handleSubmit = (name, password) => {
    const {dispatch, router} = this.props
    return dispatch(userLogin(name, password))
      .then(() => {
        const {userAccount} = this.props
        if (userAccount.lastError) {
          alert(_.get(userAccount.lastError, 'error.err_message'))
        } else {
          router.push('/')
        }
      })
  }

  render() {
    const {userAccount} = this.props
    return (
      <LoginForm
        isRequesting={userAccount.state === USER_STATUS.IN_LOGIN}
        onSubmit={this.handleSubmit}
      />
    )
  }
}
