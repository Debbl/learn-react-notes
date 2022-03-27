import React, {Component} from 'react';

// 创建 Context 对象
const UserContext = React.createContext({
  nickname: 'aaa',
  level: 100,
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => (
      <div>
          <h2>用户昵称：{value.nickname}</h2>
          <h2>用户等级：{value.level}</h2>
        </div>
      )}
    </UserContext.Consumer>
  )
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>
        <li>设置2</li>
        <li>设置3</li>
        <li>设置4</li>
      </ul>
    </div>
  )
}


class App0603 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "bzr",
      level: 99,
    }
  }
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state}>
          <h2>App0601</h2>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App0603;
