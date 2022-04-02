import React, { PureComponent } from 'react';
import Home from '../home';
import Profile from '../profile';
import './style.css';

/**
 * 复用组件的时候无法掌控的样式到底给谁了
 */
export default class App0201 extends PureComponent {
  render() {
    return (
      <div id='app'>
        <h2>App0201</h2>
        <h2 className='title'>App 的 title</h2>
        <Home />
        <Profile />
      </div>
    );
  }
}
