import React, {Component} from 'react';

class App0302 extends Component {
  render() {
    return (
      <div>
        <h2>App0302</h2>
        <ChidCpn name="foo" age={18} height={1.88} />
      </div>
    )
  }
}

class ChidCpn extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const {name, age, height} = this.props;
    return (
      <div>
        <h2>子组件展示数据：{name + " " +  age + " " + height}</h2>
      </div>
    )
  }
}

export default App0302;
