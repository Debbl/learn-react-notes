import React, { Component } from 'react';

export default class App0803 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Hello World",
    }
  }
  render() {
    console.log("App render 被调用");
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    );
  }

  // ** shouldComponentUpdate 可以检测使用过的 state , props 是否改变来重新 render **
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  changeText() {
    this.setState({
      message: "Hello React",
    })
  }
}
