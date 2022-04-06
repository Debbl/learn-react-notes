import React, { PureComponent } from 'react';
import store from '../store';
import { addAction, incAction } from '../store/actionCreators';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter,
    }
  }
  // 在 componentDidMount 里面触发，重新 render
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      })
    })
  }
  // 组件卸载，取消订阅
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <button onClick={() => this.addNumber(5)}>+5</button>
      </div>
    );
  }

  increment() {
    store.dispatch(incAction());
  }
  addNumber(num) {
    store.dispatch(addAction(num))
  }
}
