import React from 'react';
import About from './pages/about';
import Home from './pages/home';
import store from './store';

export default function App() {
  return (
    <div>
      <h2>App</h2>
      <Home />
      <About />
    </div>
  );
}
