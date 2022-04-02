import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

import '../css/index.css'

/**
 * portals
 * 希望渲染的组件独立于父组件，挂载到其他的元素 不是 root
 * ** 弹窗的运用
 */

/**
 * 将 children 元素 放到 id 为 modal 的元素里面
 */
class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    )
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    )
  }
}


export default class App1202 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1202</h2>
        <Home />
      </div>
    );
  }
}
