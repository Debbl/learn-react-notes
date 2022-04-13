import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';
import Profile from './pages/profile';

export default function App() {
  return (
    <BrowserRouter>
      <h2>App</h2>
      <Link to={'/home'}>首页</Link>
      <Link to={'/about'}>关于</Link>
      <Link to={'/profile'}>我的</Link>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
