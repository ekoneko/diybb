import React from 'react'
import {connect} from 'react-redux'
import {USER_STATUS} from 'consts/User'
import {
  userLogin as userLoginAction
} from 'store/actions/index'
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'

@connect(
  ({userAccount}) => ({
    model: {
      userAccount,
    }
  }),
  dispatch => ({dispatch}),
)
export default class Login extends React.PureComponent {
  handleSubmit = (name, password) => {
    const {dispatch, history} = this.props
    return dispatch(userLoginAction(name, password))
      .then(() => {
        const {model: {userAccount}} = this.props
        if (userAccount.lastError) {
          alert(_.get(userAccount.lastError, 'error.err_message'))
        } else {
          history.push('/')
        }
      })
      .catch(() => {
        const {model: {userAccount}} = this.props
        if (userAccount.lastError) {
          alert(_.get(userAccount.lastError, 'error.err_message'))
        }
      })
  }

  render() {
    const {model: {userAccount}} = this.props
    return (
      <LoginForm
        isRequesting={userAccount.state === USER_STATUS.IN_LOGIN}
        onSubmit={this.handleSubmit}
      />
    )
  }
}
