import React, { Component } from 'react';

export default class App0701 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
      </div>
    );
  }

  increment() {
    // 1. 不会响应式的改变
    // this.state.counter += 1;
    // console.log(this.state.counter);
    // 2. 必须通过 setState 来改变数据
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}
