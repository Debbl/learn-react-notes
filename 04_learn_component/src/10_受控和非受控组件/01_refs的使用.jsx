import React, { Component, PureComponent, createRef } from 'react';

class Counter extends PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}

export default class App1001 extends Component {
  constructor() {
    super();
    this.titleObjRef = createRef();
    this.titleFuncEl = null;
    this.counterRef = createRef();
  }
  render() {
    return (
      <div>
        <h2>App1001</h2>
        {/* ref=字符串/对象/函数 */}
        {/* 1. 字符串 this.refs */}
        <h2 ref="titleRef">Hello React</h2>
        {/* 2. 对象 */}
        <h2 ref={this.titleObjRef}>Hello Obj React</h2>
        {/* 3. 函数 */}
        <h2 ref={(arg) => this.titleFuncEl = arg}>Hello func React</h2>
        <button onClick={() => this.changeText()}>改变文本</button>
        <hr />
        <Counter ref={this.counterRef} />
        <button onClick={() => this.appBtnClick()}>App按钮+1</button>
      </div>
    );
  }
  changeText() {
    console.log(this.refs.titleRef);
    this.refs.titleRef.innerHTML = "Hello foo";
    console.log(this.titleObjRef.current);
    this.titleObjRef.current.innerHTML = "Hello bar";
    console.log(this.titleFuncEl);
    this.titleFuncEl.innerHTML = "Hello bax";
  }
  appBtnClick() {
    this.counterRef.current.increment();
  }
}
