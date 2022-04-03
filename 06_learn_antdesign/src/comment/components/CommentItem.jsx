import React, { PureComponent } from 'react';
import { Comment,Avatar, Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

export default class CommentItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const {nickname, avatar, content, datetime} = this.props.comment;

    return (
      <Comment
      actions={[<span onClick={() => this.props.removeItem()}><DeleteOutlined />删除评论</span>]}
      author={<a href="https://aiwan.run">{nickname}</a>}
      avatar={<Avatar src={avatar} alt={nickname} />}
      content={
        <p>{content}</p>
      }
      datetime={
        <Tooltip title={datetime.format('YYYY-MM-DD HH:mm:ss')}>
          <span>{datetime.fromNow()}</span>
        </Tooltip>
      }
    />
    );
  }
}
