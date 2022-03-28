import React, { Component } from 'react';

export default class App0704 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World",
      name: "foo",
    }
  }
  render() {
    return (
      <div>
        <h2>当前消息：{this.state.message}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    );
  }


  changeText() {
    this.setState({
      message: "Hello React",
    })
    console.log(this.state.message);
  }
}
