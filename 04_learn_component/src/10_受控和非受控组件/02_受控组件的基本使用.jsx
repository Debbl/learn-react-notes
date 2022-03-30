import React, { PureComponent } from 'react';

export default class App1002 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <input type="submit" value="提交" />
        </form>
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    })
  }
}
