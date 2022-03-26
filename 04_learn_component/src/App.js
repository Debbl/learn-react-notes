import React from 'react';
import App01, { App0101, App0102 } from './01_组件的定义方式/App';
import App0201 from './02_组件的生命周期/App';

function App() {
  return (
    <div className="App">
      <h1>01_组件的定义方式</h1>
      <App01 />
      <App0101 />
      <App0102 />
      <h1>02_组件的生命周期</h1>
      <App0201 />
    </div>
  );
}

export default App;
