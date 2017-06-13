import React from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import {createForm} from 'rc-form'
import PropTypes from 'prop-types'

import './style.scss'

@createForm()
export default class LoginForm extends React.PureComponent {
  static defaultProps = {
    isRequesting: false,
    form: {},
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    form: PropTypes.shape({}),
    isRequesting: PropTypes.bool,
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const {
      onSubmit,
      form: {getFieldsValue},
    } = this.props

    const {name, password} = getFieldsValue()
    onSubmit(name, password)
  }

  render() {
    const {
      isRequesting,
      form: {getFieldDecorator},
    } = this.props
    return (
      <form className="login form" onSubmit={this.handleSubmit}>
        <FormGroup>
          {getFieldDecorator('name', {
            rules: [{required: true}],
          })(
            <FormControl componentClass="input" placeholder="用户名" />
          )}
        </FormGroup>
        <FormGroup>
          {getFieldDecorator('password', {
            rules: [{required: true}],
          })(
            <FormControl componentClass="input" placeholder="密码" type="password" />
          )}
        </FormGroup>
        <FormGroup className="text-right">
          <Button
            bsStyle="primary"
            disabled={isRequesting}
            type="submit"
          >
            {isRequesting ? '提交中...' : '提交'}
          </Button>
        </FormGroup>
      </form>
    )
  }
}
