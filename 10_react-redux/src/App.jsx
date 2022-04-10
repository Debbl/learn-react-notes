import React from 'react';
import About from './pages/about';
import About2 from './pages/about2';
import About3 from './pages/about3';
import Home from './pages/home';
import Home2 from './pages/home2';
import Home3 from './pages/home3';
import Home4 from './pages/home4';

export default function App() {
  return (
    <div>
      <h2>App</h2>
      {/* <Home />
      <About /> */}
      <h2>封装后</h2>
      {/* <About2 />
      <Home2 /> */}
      <h2>官方的</h2>
      {/* <About3 /> */}
      <h2>redux-thunk</h2>
      <Home4 />
    </div>
  );
}
