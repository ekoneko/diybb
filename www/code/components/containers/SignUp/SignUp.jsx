import React from 'react'
import {connect} from 'react-redux'
import {USER_STATUS} from 'consts/User'
import {
  userCreate as userCreateAction
} from 'store/actions/index'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import SignUpForm from './SignUpForm'

@connect(
  ({userAccount}) => ({
    model: {
      userAccount,
    }
  }),
  dispatch => ({dispatch}),
)
export default class SignUp extends React.PureComponent {
  handleSubmit = (data) => {
    const {dispatch, router} = this.props
    return dispatch(userCreateAction(data))
      .then(() => {
        const {model: {userAccount}} = this.props
        if (userAccount.lastError) {
          alert(_.get(userAccount.lastError, 'error.err_message'))
        } else {
          router.push('/login')
        }
      })
  }

  render() {
    const {model: {userAccount}} = this.props
    return (
      <div>
        <Header />
        <SignUpForm
          isRequesting={userAccount.state === USER_STATUS.IN_LOGIN}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
