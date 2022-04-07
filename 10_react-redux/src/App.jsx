import React from 'react';
import About from './pages/about';
import About2 from './pages/about2';
import Home from './pages/home';
import Home2 from './pages/home2';

export default function App() {
  return (
    <div>
      <h2>App</h2>
      <Home />
      <About />
      <h2>封装后</h2>
      <About2 />
      <Home2 />
    </div>
  );
}
