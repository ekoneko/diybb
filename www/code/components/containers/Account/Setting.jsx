import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap'
import {createForm} from 'rc-form'
import {
  userUpdatePassword as userUpdatePasswordAction
} from 'store/actions'
import Header from '../Header/Header'

const style = {
  width: '80%',
  margin: '1rem auto',
  backgroundColor: '#fff',
  padding: '1rem',
}

@connect(
  dispatch => ({dispatch}),
)
@createForm()
export default class AccountSetting extends React.PureComponent {
  static defaultProps = {
    form: {},
  }

  static propTypes = {
    form: PropTypes.shape({}),
  }

  state = {
    avatarUrl: ''
  }
  handleAvatarSubmit = () => {
    if (!this.avatar.files || !this.avatar.files.length) {
      return
    }
    this.sendFile(this.avatar.files[0], '/api/avatar', {})
      .then(() => {
        this.avatar.files = []
      })
  }

  handleAvatarChange = () => {
    if (!this.avatar.files || !this.avatar.files.length) {
      return
    }
    const reader = new FileReader()
    reader.onload = e => {
      this.setState({avatarUrl: e.target.result})
    }
    reader.readAsDataURL(this.avatar.files[0])
  }

  handlePasswordSubmit = () => {
    const {form: {getFieldsValue}, dispatch} = this.props
    const {oldPassword, newPassword, repeatPassword} = getFieldsValue()
    dispatch(userUpdatePasswordAction(oldPassword, newPassword, repeatPassword))
      .then(() => {
        alert('操作成功')
      })
      .catch(errStatus => {
        if (errStatus === 403) {
          alert('原密码错误')
        } else {
          alert('操作失败')
        }
      })
  }

  sendFile(file, url, data = {}) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      const fd = new FormData();

      xhr.open('POST', url, true)
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // Handle response.
          resolve(xhr.responseText);
        }
      }
      // xhr.upload.onprogress = ...

      fd.append('avatar', file);
      // 将 data的内容一并放入post中
      for (const k in data) {
        const v = data[k]
        fd.append(k, v)
      }
      // Initiate a multipart/form-data upload
      xhr.send(fd)
    })
  }

  renderLabel() {
    const {avatarUrl} = this.state
    if (avatarUrl) {
      return <img src={avatarUrl} alt="" style={{ width: '6rem', height: '6rem'}} />
    }
    return <div>上传头像</div>
  }

  render() {
    const {form: {getFieldDecorator}} = this.props
    return (
      <div>
        <Header />
        <div style={style}>
          <FormGroup>
            <ControlLabel>{this.renderLabel()}</ControlLabel>
            <input
              ref={avatar => { this.avatar = avatar }}
              type="file"
              placeholder="上传头像"
              onChange={this.handleAvatarChange}
            />
          </FormGroup>
          <Button
            className="btn-raised"
            bsStyle="info"
            onClick={this.handleAvatarSubmit}
          >确认</Button>
          <hr />
          <div style={{width: '50%'}}>
            <FormGroup>
              {getFieldDecorator('oldPassword', {
                rules: [{required: true}],
              })(
                <FormControl label="旧密码" type="password" placeholder="旧密码" />
              )}
            </FormGroup>
            <FormGroup>
              {getFieldDecorator('newPassword', {
                rules: [{required: true}],
              })(
                <FormControl label="新密码" type="password" placeholder="新密码" />
              )}
            </FormGroup>
            <FormGroup>
              {getFieldDecorator('repeatPassword', {
                rules: [{required: true}],
              })(
                <FormControl label="确认新密码" type="password" placeholder="确认新密码" />
              )}
            </FormGroup>
          </div>
          <Button
            className="btn-raised"
            bsStyle="info"
            onClick={this.handlePasswordSubmit}
          >确认</Button>
        </div>
      </div>
    )
  }
}
