import React, { PureComponent, Fragment } from 'react';
/**
 * fragments 避免组件包一个 div
 * 1. <></>
 * 2. <Fragment></Fragment>
 */
export default class App1203 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      friends: [
        {name: "foo", age: 18},
        {name: "bar", age: 19},
        {name: "bax", age: 20},
      ]
    }
  }
  render() {
    return (
      <>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        {this.state.friends.map((item) => (
          <Fragment key={item.name}>
            <li>{item.name} {item.age}</li>
          </Fragment>
        ))}
      </>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}
