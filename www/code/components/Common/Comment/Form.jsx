import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

export default class Form extends React.Component {
  render() {
    return (
      <form className="form">
        <FormGroup>
          <FormControl componentClass="textarea" placeholder="请输入评论内容" />
        </FormGroup>
        <FormGroup className="text-right">
          <Button>提交</Button>
        </FormGroup>
      </form>
    )
  }
}
