import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  HashRouter,
  Link,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/Login';
import Profile from './pages/profile';
import User from './pages/User';
import { History, Culture, Connect } from './pages/about';
import Detail from './pages/Detail';
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { to: '/home', title: '首页' },
        { to: '/about', title: '关于' },
        { to: '/profile', title: '我的' },
      ],
      currentIndex: 0,
    };
  }
  render() {
    const activeStyle = {
      color: 'red',
    };
    return (
      <BrowserRouter>
        <h2>App</h2>
        {/* <Link to={'/home'}>首页</Link>
        <Link to={'/about'}>关于</Link>
        <Link to={'/profile'}>我的</Link> */}
        {/* {this.state.links.map((link) => (
          <div key={link.to} className={this.state.currentIndex === 0}>
            <Link to={link.to}>{link.title}</Link>
          </div>
        ))} */}
        <NavLink
          to={'/home'}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          首页
        </NavLink>
        <NavLink to={'/about'}>关于</NavLink>
        <NavLink to={'/profile'}>我的</NavLink>
        <NavLink to={'/user'}>用户</NavLink>
        <NavLink to={'/detail'}>详情</NavLink>
        <Routes>
          <Route index element={<h2>默认显示</h2>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />}>
            <Route path=":id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
