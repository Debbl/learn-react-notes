import React, {Component} from 'react';

import PropTypes from 'prop-types'

class App0304 extends Component {
  render() {
    return (
      <div>
        <h2>App0304</h2>
        <ChidCpn name="foo" age={18} height={1.88} names={['abc', 'cba', 'nba']} />
        {/* <ChidCpn name="foo" age={18} height={1.88} names={"123"} /> */}
        <ChidCpn name="foo" age={18} height={1.88} />
      </div>
    )
  }
}

function ChidCpn(props) {
  const {name, age, height, names} = props;
  return (
    <div>
      <h2>函数式组件：{name + " " + age + " " + height}</h2>
      <ul>
        {names.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

ChidCpn.propTypes ={
  name: PropTypes.string.isRequired, // isRequired 属性必须传
  age: PropTypes.number,
  height: PropTypes.number,
  names: PropTypes.array,
}
ChidCpn.defaultProps = {
  name: 'bar',
  age: 18,
  height: 1.87,
  names: ['111', '222', '333'],
}

// 类组件可以写在类组件的 static 方法中 和 . 是一样的
class ChildCpn2 extends Component {
  static propTypes = {

  }
  static defaultProps = {

  }
}

export default App0304;
