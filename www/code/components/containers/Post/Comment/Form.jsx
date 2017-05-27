import React from 'react'
import PropTypes from 'prop-types'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

export default class Form extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    onSubmit: () => {},
  }

  state = {
    content: '',
  }

  resetContent() {
    this.setState({content: ''})
  }

  handleSubmit = () => {
    const {onSubmit} = this.props
    const {content} = this.state
    onSubmit(content).then(() => this.resetContent())
  }

  handleChange = (propxy) => {
    const content = propxy.target.value
    this.setState({content})
  }

  render() {
    const {content} = this.state
    return (
      <form className="form">
        <FormGroup className="is-empty">
          <FormControl
            componentClass="textarea"
            value={content}
            placeholder="请输入评论内容"
            onChange={this.handleChange}
          />
          <div className="text-right">
            <Button
              className="submit"
              disabled={!content}
              onClick={this.handleSubmit}
            >提交</Button>
          </div>
        </FormGroup>
      </form>
    )
  }
}
