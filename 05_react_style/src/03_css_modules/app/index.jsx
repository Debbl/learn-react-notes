import React, { PureComponent } from 'react';
import Home from '../home';
import Profile from '../profile';
import styles from './style.module.css';

/**
 * ** 使用的是类 Webpack 的打包工具的 css-loader 实现的 **
 * 缺点
 *  1. 不方便使用动态样式
 */
export default class App0301 extends PureComponent {
  render() {
    return (
      <div>
        <h2 className={styles.title}>App0301</h2>
        <Home />
        <Profile />
      </div>
    );
  }
}
