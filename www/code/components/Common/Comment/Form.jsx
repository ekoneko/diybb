import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

export default class Form extends React.PureComponent {
  render() {
    return (
      <form className="form">
        <FormGroup>
          <FormControl componentClass="textarea" placeholder="请输入评论内容" />
          <div className="text-right">
            <Button className="submit">提交</Button>
          </div>
        </FormGroup>
      </form>
    )
  }
}
