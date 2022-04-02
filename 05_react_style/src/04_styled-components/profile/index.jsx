import React, { PureComponent } from 'react';
import styled from 'styled-components';

/**
 * 动态的传递参数给 CSS
 * 特点
 *  1. props 穿透
 *  2. attrs 使用
 *  3. 传入 state 作为 props 的属性
 */
const DEInput = styled.input.attrs({
  placeholder: "占位符",
  bColor: "red",
})`
  background-color: lightblue;
  border-color: ${(props) => props.bColor};
  color: ${(props) => props.color}
`

export default class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "yellow",
    }
  }
  render() {
    return (
      <div>
        {/* props 穿透 会传给 input */}
        <DEInput type="password" color={this.state.color} />
        <h2>Profile</h2>
      </div>
    );
  }
}
