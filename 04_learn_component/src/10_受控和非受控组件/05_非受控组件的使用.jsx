import React, { createRef, PureComponent } from 'react';

export default class App1005 extends PureComponent {
  constructor(props) {
    super(props);
    // 非受控组件 不推荐
    this.usernameRef = createRef();
  }
  render() {
    return (
      <div>
        <h2>App1002</h2>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户：
            <input
              ref={this.usernameRef}
              type="text"
              id="username"
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current);
    console.log(this.usernameRef.current.value);
  }
}
