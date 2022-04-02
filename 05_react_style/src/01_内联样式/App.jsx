import React, { PureComponent } from 'react';
/**
 * 内联样式
 * 1. 对象
 * 2. 动态改变对象
 */
export default class App0101 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "purple",
    }
  }
  render() {
    const PStyle = {
      color: this.state.color,
      textDecoration: "underline",
    }
    return (
      <div>
        <h2 style={{fontSize: "50px", color: "red"}}>我是标题</h2>
        <p style={PStyle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    );
  }
}
