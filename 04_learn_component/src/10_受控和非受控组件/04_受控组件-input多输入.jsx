import React, { PureComponent } from 'react';

export default class App1004 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      valid: "",
    }
  }
  render() {
    return (
      <div>
        <h2>App1002</h2>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户：
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <br />
          <label htmlFor="password">
            密码：
            <input
              type="text"
              id="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <br />
          <label htmlFor="valid">
            验证码：
            <input
              type="text"
              id="valid"
              name="valid"
              value={this.state.valid}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    const {username, password, valid} = this.state;
    console.log(username, password, valid);
  }
  handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    // this.setState({
    //   username: event.target.value,
    // })
    // ** 计算属性名 **
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
}
