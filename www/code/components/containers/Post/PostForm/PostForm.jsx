import React from 'react'
import PropTypes from 'prop-types'
import {FormGroup, FormControl, Button} from 'react-bootstrap'

import Editor from '../../../globals/Editor/Editor'

const style = {
  width: '80%',
  margin: '2rem auto',
  backgroundColor: '#fff',
  padding: '1rem',
}

export default class PostForm extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  static defaultProps = {
    onSubmit: () => {},
  }

  handleSubmit = () => {
    const {onSubmit} = this.props
    const title = this.title.value
    const content = window.tinyMCE.activeEditor.getContent()
    if (!title || !window.tinyMCE.activeEditor.getContent({format: 'text'}).trim()) {
      alert('标题内容不能为空')
    } else {
      onSubmit({title, content})
    }
  }

  render() {
    return (
      <FormGroup style={style}>
        <FormControl
          inputRef={title => { this.title = title }}
          placeholder="请输入标题"
        />
        <Editor id="editor" />
        <div className="text-right">
          <Button
            className="btn-raised"
            bsStyle="info"
            onClick={this.handleSubmit}
          >提交</Button>
        </div>
      </FormGroup>
    )
  }
}
