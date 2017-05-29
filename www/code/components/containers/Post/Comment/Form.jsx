import React from 'react'
import PropTypes from 'prop-types'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

import Editor from '../../../globals/Editor/Editor'

export default class Form extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    onSubmit: () => {},
  }

  state = {
    content: '',
    showEditor: false,
  }

  resetContent() {
    this.setState({
      content: '',
      showEditor: false,
    })
  }

  handleSubmit = () => {
    const {onSubmit} = this.props
    if (!window.tinyMCE.activeEditor.getContent({format: 'text'}).trim()) {
      return
    }
    const content = window.tinyMCE.activeEditor.getContent()
    onSubmit(content).then(() => this.resetContent())
  }

  handleFocus = () => {
    if (!this.state.showEditor) {
      this.setState({showEditor: true})
    }
  }

  render() {
    const {content, showEditor} = this.state
    return (
      <form className="form">
        <FormGroup className="is-empty">
          {showEditor && (
            <Editor
              id="comment_editor"
              options={{min_height: 100}}
            />
          )}
          {showEditor || (
            <FormControl
              componentClass="textarea"
              value={content}
              placeholder="请输入评论内容"
              onFocus={this.handleFocus}
            />
          )}
          <div className="text-right">
            <Button
              className="submit"
              onClick={this.handleSubmit}
            >提交</Button>
          </div>
        </FormGroup>
      </form>
    )
  }
}
