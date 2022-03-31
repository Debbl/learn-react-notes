import React, { PureComponent } from 'react';

/**
 * 获取组件的渲染的时间
 */

class Home extends PureComponent {

  UNSAFE_componentWillMount() {
    this.beginTime = Date.now();
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }

  componentDidMount() {
    this.endTime = Date.now();
    const interval = this.endTime - this.beginTime;
    console.log("组件的渲染时间", interval);
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    )
  }
}


export default class App1106 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1106</h2>
        <Home />
        <About />
      </div>
    );
  }
}
