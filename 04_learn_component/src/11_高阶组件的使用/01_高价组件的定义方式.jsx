import React, { PureComponent } from 'react';

class App1101 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1101</h2>
        <h2>参数传递 name: {this.props.name}</h2>
      </div>
    );
  }
}

// 定义开发时，组件显示的名字
App1101.displayName = "定义显示名字";

function enhanceComponent(WrappedComponent) {
  // 类名可以匿名 即可以省略 anonymous
  return class extends PureComponent {
    render() {
      return (
        <div>
          <h2>高级组件</h2>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

// 函数式组件
function enhanceComponent2(WrappedComponent) {
  function NewComponent(props) {
    return <WrappedComponent {...props} />
  }

  return NewComponent;
}

const EnhanceComponent = enhanceComponent(App1101);

export default EnhanceComponent;
