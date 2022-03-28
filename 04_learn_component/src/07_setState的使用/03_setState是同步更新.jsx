import React, { Component } from 'react';

export default class App0703 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
    }
  }
  render() {
    return (
      <div>
        <h2>当前消息：{this.state.message}</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
        <button id="btn">改变文本2</button>
      </div>
    );
  }

  componentDidMount() {
    document.getElementById("btn").addEventListener("click", () => {
      this.setState({
        message: "你好哇！"
      })
      console.log(this.state.message);
    })
  }

  changeText() {
    // setState 异步更新
    this.setState({
      message: "Hello React",
    })
    console.log(this.state.message);
  }
}
