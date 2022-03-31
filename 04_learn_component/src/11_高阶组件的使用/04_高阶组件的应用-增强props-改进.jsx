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
      <div>
        <h2>Home: {`昵称 ${this.props.nickname} 等级 ${this.props.level} 区域 ${this.props.region}`}</h2>
      </div>
    )
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About: {`昵称 ${this.props.nickname} 等级 ${this.props.level} 区域 ${this.props.region}`}</h2>
      </div>
    )
  }
}

function Detail(props) {
  return (
    <div>
      <ul>
        <li>{props.nickname}</li>
        <li>{props.level}</li>
        <li>{props.region}</li>
      </ul>
    </div>
  )
}

const UserHome = witeUser(Home);
const UserAbout = witeUser(About);
const UserDetail = witeUser(Detail);

export default class App1104 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1102</h2>
        <UserContext.Provider value={{nickname: "Debbl", level: 99, region: "中国"}}>
          <UserHome />
          <UserAbout />
          <UserDetail />
        </UserContext.Provider>
      </div>
    );
  }
}
