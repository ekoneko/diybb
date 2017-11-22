import React from 'react'
import {createForm} from 'rc-form'
import PropTypes from 'prop-types'
import {FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap'

const style = {
  width: '80%',
  margin: '1rem auto',
  backgroundColor: '#fff',
  padding: '1rem',
}

@createForm()
export default class SignUpForm extends React.PureComponent {
  static defaultProps = {
    form: {},
    onSubmit: () => {},
  }

  static propTypes = {
    form: PropTypes.shape({}),
    onSubmit: PropTypes.func,
  }

  handleSubmit = () => {
    const {form: {validateFields}, onSubmit} = this.props
    validateFields((err, data) => {
      if (err) {
        // TODO
        console.error(err)
        return
      }
      if (data.password !== data.repeatPassword) {
        alert('密码不一致')
        return
      }
      onSubmit(data)
    })
  }

  validEmail = (rule, value = '', callback) => {
    /* eslint-disable */
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    /* eslint-enable */
    if (!value.match(regex)) {
      return callback('邮箱格式错误')
    }
    return callback()
  }

  render() {
    const {form: {getFieldDecorator}} = this.props
    return (
      <div style={style}>
        <FormGroup>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                validator: this.validEmail,
              },
            ],
          })(
            <FormControl label="邮箱" type="email" placeholder="登录邮箱" />
          )}
        </FormGroup>
        <FormGroup>
          {getFieldDecorator('name', {
            rules: [{required: true}],
          })(
            <FormControl label="用户名" type="text" placeholder="你的昵称" />
          )}
        </FormGroup>
        <FormGroup>
          {getFieldDecorator('password', {
            rules: [{required: true}],
          })(
            <FormControl label="密码" type="password" placeholder="登录密码" />
          )}
        </FormGroup>
        <FormGroup>
          {getFieldDecorator('repeatPassword', {
            rules: [{required: true}],
          })(
            <FormControl label="确认密码" type="password" placeholder="确认密码" />
          )}
        </FormGroup>
        <Button
          className="btn-raised"
          bsStyle="info"
          onClick={this.handleSubmit}
        >确认</Button>
      </div>
    )
  }
}
