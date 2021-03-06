import React, { PureComponent } from 'react';

export default class App1003 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fruits: "orange",
    }
  }
  render() {
    return (
      <div>
        <h2>App1002</h2>
        <form action="" onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            <select
              name="fruits"
              value={this.state.fruits}
              onChange={(e) => this.handleChange(e)}>
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橘子</option>
            </select>
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
      fruits: event.target.value,
    })
  }
}
