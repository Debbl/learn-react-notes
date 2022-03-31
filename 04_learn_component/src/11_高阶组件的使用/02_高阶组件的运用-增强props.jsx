import React, { PureComponent } from 'react';

// 定义一个高阶组件
function enhanceRegionProps(WrappedComponent) {
  return props => {
    return <WrappedComponent {...props} region={"中国"} />
  }
}


class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home: {`昵称 ${this.props.nickname} 等级 ${this.props.level} 区域 ${this.props.region}`}</h2>
      </div>
    )
  }
}
class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About: {`昵称 ${this.props.nickname} 等级 ${this.props.level} 区域 ${this.props.region}`}</h2>
      </div>
    )
  }
}

const EnhanceHome = enhanceRegionProps(Home);
const EnhanceAbout = enhanceRegionProps(About);

export default class App1102 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1102</h2>
        <EnhanceHome nickname="Debbl" level={99} />
        <EnhanceAbout nickname="Debbl" level={99} />
      </div>
    );
  }
}
