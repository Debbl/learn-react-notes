import React, { Component } from 'react';

export default class App0705 extends Component {
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

  componentDidUpdate() {
    console.log(this.state.counter, "counter");
  }

  increment() {
    // 1. setState 本身的合并
    // this.setState({
    //   counter: this.state.counter + 1,
    // })
    // this.setState({
    //   counter: this.state.counter + 1,
    // })
    // this.setState({
    //   counter: this.state.counter + 1,
    // })

    // 2. setState 合并时进行累加
    this.setState((preState, props) => {
      console.log(props);
      return  {
        counter: preState.counter + 1
      }
    })
    this.setState((preState, props) => {
      return  {
        counter: preState.counter + 1
      }
    })
    this.setState((preState, props) => {
      return  {
        counter: preState.counter + 1
      }
    })
  }
}
