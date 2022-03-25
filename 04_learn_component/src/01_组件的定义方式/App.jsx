import React, {Component} from 'react';

class App01 extends Component {
  constructor() {
    super();
    this.state = {
      message: "你好哇"
    }
  }

  render() {
    return (
      <div>
        <div>App01类组件</div>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

/**
 * 函数式组件的特点：
 *  1. 没有 this 对象
 *  2. 没有内部的状态 > this.state (hooks)
*/
export function App0101() {
  return (
    <div>
      <h2>我是函数组件</h2>
    </div>
  )
}
/**
 * 函数式组件的可以返回的类型
 *  1. React 元素
 *  2. 数组或 fragments
 *  3. Portals
 *  4. 字符串或数值类型
 *  5. 布尔类型或null
 */
export function App0102() {
  // return 123;
  return [
    <div>hello1</div>,
    <div>hello2</div>
  ]
}


export default App01;