import React, { PureComponent, createContext } from 'react';

const UserContext = createContext({
  nickname: "Debbl",
  level: 1,
  region: "中国"
})

// 定义一个高阶组件
function witeUser(WrappedComponent) {
  return props => (
    <UserContext.Consumer>
      {(user) => <WrappedComponent {...props} {...user} />}
    </UserContext.Consumer>
  )
}


class Home extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
      {(user) => (
        <h2>Home: {`昵称 ${user.nickname} 等级 ${user.level} 区域 ${user.region}`}</h2>
      )}
    </UserContext.Consumer>
    )
  }
}
Home.contextType = UserContext;

class About extends PureComponent {
  render() {
    return (
      <UserContext.Consumer>
        {(user) => (
          <h2>About: {`昵称 ${user.nickname} 等级 ${user.level} 区域 ${user.region}`}</h2>
        )}
      </UserContext.Consumer>
    )
  }
}

export default class App1103 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1102</h2>
        <UserContext.Provider value={{nickname: "Debbl", level: 99, region: "中国"}}>
          <Home />
          <About />
        </UserContext.Provider>
      </div>
    );
  }
}
