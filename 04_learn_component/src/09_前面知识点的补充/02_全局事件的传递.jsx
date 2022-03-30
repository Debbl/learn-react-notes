import React, { PureComponent } from 'react';
import { EventEmitter } from 'events';

const eventBus = new EventEmitter();

class Home extends PureComponent {
  componentDidMount() {
    eventBus.on("sayHello", this.handleSayHelloListener);
  }
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleSayHelloListener);
  }
  // sayHello 事件监听执行的函数
  handleSayHelloListener(...args) {
    console.log(args, "SayHello---~~~");
  }
  render() {
    console.log("Home render ~~~");
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h2>Profile</h2>
        <button onClick={() => this.emitEvent()}>点击了Profile按钮</button>
      </div>
    )
  }
  emitEvent() {
    eventBus.emit("sayHello", "Hello Home", 666)
  }
}



export default class App0902 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App0902</h2>
        <Home />
        <Profile />
      </div>
    );
  }
}
