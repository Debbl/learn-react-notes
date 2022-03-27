import React, {Component} from 'react';


function ProfileHeader(props) {
  return (
    <div>
      <h2>用户昵称：{props.nickname}</h2>
      <h2>用户等级：{props.level}</h2>
    </div>
  )
}

/**
 * ...props
 * 属性展开 React 的 JSX 语法
 * https://zh-hans.reactjs.org/docs/jsx-in-depth.html#spread-attributes
 */
function Profile(props) {
  return (
    <div>
      <ProfileHeader {...props} />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}


class App0601 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: "foo",
      level: 99,
    }
  }
  render() {
    return (
      <div>
        <h2>App0601</h2>
        <Profile {...{nickname: 'bar', level: 98}} />
        <Profile {...this.state} />
      </div>
    )
  }
}

export default App0601;
