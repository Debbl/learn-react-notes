import React, { PureComponent } from 'react';

export default class ClassCounterTitleChange extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    document.title = this.state.counter;
    console.log('订阅事件');
  }
  componentDidUpdate() {
    document.title = this.state.counter;
    console.log('取消事件');
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.decrement()}>-1</button>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
}
