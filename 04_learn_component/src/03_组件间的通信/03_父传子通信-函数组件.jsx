import React, {Component} from 'react';

class App0303 extends Component {
  render() {
    return (
      <div>
        <h2>App0303</h2>
        <ChidCpn name="foo" age={18} height={1.88} />
      </div>
    )
  }
}

function ChidCpn(props) {
  const {name, age, height} = props;
  return <h2>函数式组件：{name + " " + age + " " + height}</h2>;
}

export default App0303;
