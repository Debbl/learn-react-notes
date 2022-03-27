import React, { Component } from "react";

function CounterButton(props) {
  return (
  <div>
    <button onClick={() => props.counterClick("CounterButton~")}>+</button>
  </div>
  )
}

class App0305 extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
  }
  increment(str) {
    console.log(str, "message");
    this.setState({
      counter: this.state.counter + 1,
    })
  }
  render() {
    return (
      <div>
        <h2>App0305</h2>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+</button>
        <hr />
        <CounterButton counterClick={(str) => this.increment(str)} />
        <CounterButton counterClick={this.increment.bind(this)} />
      </div>
    )
  }
}

export default App0305;
