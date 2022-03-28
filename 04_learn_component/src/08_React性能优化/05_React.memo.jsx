import React, { Component, PureComponent, memo } from 'react';

const MemoHeader =  memo(function () {
  console.log("函数组件 Header 被调用");
  return (
    <div>
      <h2>我是Header组件</h2>
    </div>
  )
})

class Main extends PureComponent {
  render() {
    console.log("Main render 被调用");
    return (
      <div>
        <Banner />
        <MemoProductList />
      </div>
    )
  }
}

class Banner extends PureComponent {
  render() {
    console.log("Banner render 被调用");
    return (
      <div>
        <h2>我是 Banner 组件</h2>
      </div>
    )
  }
}

const MemoProductList = memo(function ProductList() {
  console.log("函数组件 ProductList 被调用");
  return (
    <div>
      <ul>
        <li>商品列表1</li>
        <li>商品列表2</li>
        <li>商品列表3</li>
        <li>商品列表4</li>
        <li>商品列表5</li>
        <li>商品列表6</li>
      </ul>
    </div>
  )
})

const MemoFooter = memo(function Footer() {
  console.log("函数组件 Footer 被调用");
  return (
    <div>
      <h2>我是 Footer 组件</h2>
    </div>
  )
})

/**
 * 使用 PureComponent 没用到的 state 改变 不会 render
 * 函数组件可以使用 React.memo()
 * 效果一样 使用的 shallowEqual
 */
export default class App0805 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }
  render() {
    console.log("App 被调用-------------------------------");
    return (
      <div>
        {/* counter 改变其子组件会一起改变，子组件并没有用到 counter 这个改变是多余的 */}
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.increment()}>+1</button>
        <MemoHeader />
        <Main />
        <MemoFooter />
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}
