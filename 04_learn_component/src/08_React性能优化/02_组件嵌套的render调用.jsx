import React, { Component } from 'react';

function Header() {
  console.log("函数组件 Header 被调用");
  return (
    <div>
      <h2>我是Header组件</h2>
    </div>)
}

class Main extends Component {
  render() {
    console.log("Main render 被调用");
    return (
      <div>
        <Banner />
        <ProductList />
      </div>
    )
  }
}

class Banner extends Component {
  render() {
    console.log("Banner render 被调用");
    return (
      <div>
        <h2>我是 Banner 组件</h2>
      </div>
    )
  }
}

function ProductList() {
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
}

function Footer() {
  console.log("函数组件 Footer 被调用");
  return (
    <div>
      <h2>我是 Footer 组件</h2>
    </div>
  )
}

export default class App0802 extends Component {
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
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    })
  }
}
