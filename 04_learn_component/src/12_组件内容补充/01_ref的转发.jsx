import React, { PureComponent, createRef, forwardRef } from 'react';



class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

/**
 * 使用 forwardRef 高价组件包裹 可以把 ref 给函数组件
 * ** ref 属性 是不会给 props 里面的，可以通过 forwardRef 高阶组件的参数传递 **
 */
const Profile = forwardRef(function(props, ref) {
  return (
    <div>
      <p ref={ref}>Profile</p>
    </div>
  )
})

export default class App1201 extends PureComponent {
  constructor(props) {
    super(props);

    this.titleRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }
  render() {
    return (
      <div>
        <h2 ref={this.titleRef}>Hello World</h2>
        <Home ref={this.homeRef} />
        <Profile ref={this.profileRef} />
        <button onClick={() => this.printRef()}>打印Ref</button>
      </div>
    );
  }

  printRef() {
    console.log(this.titleRef.current);
    console.log(this.homeRef.current);
    console.log(this.profileRef.current);
  }
}
