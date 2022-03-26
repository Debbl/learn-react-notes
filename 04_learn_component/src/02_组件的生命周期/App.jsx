import React, { Component } from 'react';

export default class App0201 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
    console.log("执行了组件的constructor函数");
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
      isShow: true,
    })
  }
  render() {
    console.log("执行了组件的render函数");
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
        <hr />
        <button onClick={() => this.setState({isShow: !this.state.isShow})}>切换</button>
        {this.state.isShow && <App0202 />}
      </div>
    );
  }
  componentDidMount() {
    console.log("执行了组件的componentDidMount方法");
  }
  componentDidUpdate(preProps, preState, snapShot) {
    console.log(preProps, "preProps");
    console.log(preState, "preState");
    console.log(snapShot, "snapShot");
    console.log("执行了组件的componentDidUpdate方法");;
  }
}

class App0202 extends Component {
  render() {
    return (
      <div>
        <h2>我是App0202</h2>
      </div>
    )
  }
  componentWillUnmount() {
    console.log("执行了组件的componentWillUnmount方法");
  }
}
