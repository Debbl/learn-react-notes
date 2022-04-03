import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './style.css';

export default class App01 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      isBar: true,
    }
  }
  render() {
    const {isActive, isBar} = this.state;
    const errClass = "errClass";
    const warnClass = 10; // null undefined
    return (
      <div>
        {/* 1. 原生 React 中添加 class 方法 */}
        <h2 className={"foo bar active"}>我是标题1</h2>
        <h2 className={"title" + (isActive ? " active": "")}>我是标题2</h2>
        <h2 className={["title", (isActive && "active")].filter(Boolean).join(" ") }>我是标题3</h2>

        {/* 2. classNames 库添加 class */}
        <h2 className={classNames("foo", "bar")}>我是标题6</h2>
        <h2 className={classNames({"active": isActive, "bar": isBar}, "title")}>我是标题7</h2>
        <h2 className={classNames("foo", errClass, warnClass, {"active": isActive})}>我是标题8</h2>
        <h2 className={classNames(["active", "title"])}>我是标题9</h2>
        <h2 className={classNames(["title", {"bar": isBar}])}>我是标题10</h2>
      </div>
    );
  }
}
