import React, { PureComponent } from 'react';
import { Button, Input } from 'antd';
import moment from 'moment';

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea
          rows={4}
          value={this.state.content}
          onChange={(e) => this.handleChange(e)} />
        <Button type='primary' onClick={() => this.addComment()}>添加评论</Button>
      </div>
    );
  }
  handleChange(event) {
    this.setState({
      content: event.target.value,
    })
  }
  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://avatars.githubusercontent.com/u/61053131?s=40",
      nickname: "Debbl",
      datetime: moment(),
      content: this.state.content,
    }
    this.props.submitComment(commentInfo);
    this.setState({
      content: "",
    })
  }
}
