import React, { PureComponent } from 'react';
import 'moment/locale/zh-cn';
import CommentInput from './components/CommentInput';
import CommentItem from './components/CommentItem';

export default class App03 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
    }
  }
  render() {
    return (
      <div style={{width: "500px", padding: "20px 20px"}}>
        <h2>App03</h2>
        {this.state.commentList.map((item, index) => (
          <CommentItem key={item.id} comment={item} removeItem={() => this.removeComment(index)} />
        ))}
        <CommentInput submitComment={(info) => this.submitComment(info)} />
      </div>
    );
  }
  submitComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info],
    })
  }
  removeComment(index) {
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index, 1);
    this.setState({
      commentList: newCommentList,
    })
  }
}
