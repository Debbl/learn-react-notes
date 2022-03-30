import React, { PureComponent } from 'react';

export default class App0901 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        {name: 'foo', age: 18},
        {name: 'bar', age: 19},
        {name: 'bax', age: 20},
      ]
    }
  }
  render() {
    return (
      <div>
        <h2>App0901</h2>
        <h2>好友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => (
            <li key={item.name}>
              姓名：{item.name}
              年龄：{item.age} {' '}
              <button onClick={() => this.incrementAge(index)}>age + 1</button>
            </li>
          ))}
        </ul>
        <button onClick={() => this.insertData()}>添加数据</button>
      </div>
    );
  }

  insertData() {
    console.log("添加数据");
    const newData = {name: "tom", age: 17};
    this.setState({
      // ** 一个新的 friends 内存地址，利于 shouldComponentUpdate 优化 **
      friends: [...this.state.friends, newData]
    })
  }
  incrementAge(index) {
    // ** 一个新的 friends 内存地址 newFriends ，利于 shouldComponentUpdate 优化 **
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    })
  }
}
