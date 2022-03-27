import React, {Component} from 'react';

// 创建 Context 对象
const UserContext = React.createContext({
  nickname: 'aaa',
  level: 100,
})

const ThemeContext = React.createContext({
  color: "black",
})

function ProfileHeader() {
  return (
    <UserContext.Consumer>
      {(value) => (
      <ThemeContext.Consumer>
        {(theme) => (
        <div>
          <h2>用户昵称：{value.nickname}</h2>
          <h2>用户等级：{value.level}</h2>
          <h2>主题颜色：{theme.color}</h2>
        </div>
        )}
      </ThemeContext.Consumer>
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


class App0604 extends Component {
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
          <ThemeContext.Provider value={{color: "red"}}>
            <h2>App0601</h2>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

export default App0604;
