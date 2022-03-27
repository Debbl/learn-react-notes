import React, {Component} from 'react';
import NavBer from './NavBar';
import NavBer2 from './NavBar2';
import './style.css';

/**
 * JSX 可以作为数据通过 props 传递
 * props.children 数组 存的是 slot
 * 1. props.children
 * 2. props
 */
class App0501 extends Component {
  render() {
    return (
      <div>
        <h2>App0501</h2>
        <NavBer>
          <span>left</span>
          <span>main</span>
          <span>right</span>
        </NavBer>
        <NavBer2
          leftSlot={<span>left</span>}
          centerSlot={<span>main</span>}
          rightSlot={<span>right</span>}
          />
      </div>
    )
  }
}

export default App0501;
