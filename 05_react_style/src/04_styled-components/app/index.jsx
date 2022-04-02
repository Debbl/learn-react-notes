import React, { PureComponent } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Home from '../home';
import Profile from '../profile';

/**
 * ThemeProvider 使用 context 可以设置全局属性
 */

const DEButton = styled.button`
  padding: 10px 20px;
  color: red;
`
// 继承自 DEButton
const DEPrimaryButton = styled(DEButton)`
  color: green;
`

export default class App0401 extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={{themeColor: "yellow", fontSize: "30px"}}>
        <h2>App0401</h2>
        <DEButton>普通按钮</DEButton>
        <DEPrimaryButton>主要按钮（样式继承）</DEPrimaryButton>
        <Home />
        <Profile />
      </ThemeProvider>
    );
  }
}
