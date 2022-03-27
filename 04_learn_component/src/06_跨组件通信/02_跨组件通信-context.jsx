import React, {Component} from 'react';

// 创建 Context 对象
const UserContext = React.createContext({
  nickname: 'aaa',
  level: 100,
})

class ProfileHeader extends Component {
  render() {
    console.log(this.context);
    return (
      <div>
        <h2>用户昵称：{this.context.nickname}</h2>
        <h2>用户等级：{this.context.level}</h2>
      </div>
    )
  }
}
ProfileHeader.contextType = UserContext;

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


class App0602 extends Component {
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
        <UserContext.Provider value={this.state}>
          <h2>App0601</h2>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}

export default App0602;
