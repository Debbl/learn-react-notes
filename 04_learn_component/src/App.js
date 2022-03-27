import React from 'react';
import App01, { App0101, App0102 } from './01_组件的定义方式/App';
import App0201 from './02_组件的生命周期/App';
import App0301 from './03_组件间的通信/01_组件间的嵌套';
import App0302 from './03_组件间的通信/02_父传子通信-类组件';
import App0303 from './03_组件间的通信/03_父传子通信-函数组件';
import App0304 from './03_组件间的通信/04_父传子通信-属性验证';
import App0305 from './03_组件间的通信/05_子传父通信-函数传递';
import App0401 from './04_组件通信案例/App';
import App0501 from './05_React实现slot/App';

function App() {
  return (
    <div className="App">
      <h1>01_组件的定义方式</h1>
      <App01 />
      <App0101 />
      <App0102 />
      <h1>02_组件的生命周期</h1>
      <App0201 />
      <h1>03_组件间的通信</h1>
      <App0301 />
      <App0302 />
      <App0303 />
      <App0304 />
      <App0305 />
      <h1>04_组件通信案例</h1>
      <App0401 />
      <h1>05_React实现slot</h1>
      <App0501 />
    </div>
  );
}

export default App;
