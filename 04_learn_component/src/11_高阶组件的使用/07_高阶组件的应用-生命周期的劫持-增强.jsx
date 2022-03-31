import React, { PureComponent } from 'react';

/**
 * 获取组件的渲染的时间
 */

function withRenderTime(WrappedComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = Date.now();
    }
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
    componentDidMount() {
      this.endTime = Date.now();
      const interval = this.endTime - this.beginTime;
      console.log(WrappedComponent.name, "组件的渲染时间", interval
      );
    }
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
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

const TimeHome = withRenderTime(Home);
const TimeAbout = withRenderTime(About);


export default class App1107 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1106</h2>
        <TimeHome />
        <TimeAbout />
      </div>
    );
  }
}
