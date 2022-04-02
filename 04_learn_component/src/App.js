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
import App0601 from './06_跨组件通信/01_跨组件通信-props';
import App0602 from './06_跨组件通信/02_跨组件通信-context';
import App0603 from './06_跨组件通信/03_跨组件通信-context-函数组件';
import App0604 from './06_跨组件通信/04_跨组件通信-多个context';
import App0701 from './07_setState的使用/01_为什么使用setState';
import App0702 from './07_setState的使用/02_setState是异步更新';
import App0703 from './07_setState的使用/03_setState是同步更新';
import App0704 from './07_setState的使用/04_setState数据的合并';
import App0705 from './07_setState的使用/05_setState本身的合并';
import App0801 from './08_React性能优化/01_列表中key的作用';
import App0802 from './08_React性能优化/02_组件嵌套的render调用';
import App0803 from './08_React性能优化/03_shouldComponentUpdate';
import App0804 from './08_React性能优化/04_PureComponent';
import App0805 from './08_React性能优化/05_React.memo';
import App0901 from './09_前面知识点的补充/01_setState不可变的力量';
import App0902 from './09_前面知识点的补充/02_全局事件的传递';
import App1001 from './10_受控和非受控组件/01_refs的使用';
import App1002 from './10_受控和非受控组件/02_受控组件的基本使用';
import App1003 from './10_受控和非受控组件/03_受控组件-select的使用';
import App1004 from './10_受控和非受控组件/04_受控组件-input多输入';
import App1005 from './10_受控和非受控组件/05_非受控组件的使用';
import App1101 from './11_高阶组件的使用/01_高价组件的定义方式';
import App1102 from './11_高阶组件的使用/02_高阶组件的运用-增强props';
import App1103 from './11_高阶组件的使用/03_高阶组件的应用-增强props默认做法';
import App1104 from './11_高阶组件的使用/04_高阶组件的应用-增强props-改进';
import App1105 from './11_高阶组件的使用/05_高阶组件应用-登录鉴权操作';
import App1106 from './11_高阶组件的使用/06_高阶组件的应用-生命周期的劫持-默认';
import App1107 from './11_高阶组件的使用/07_高阶组件的应用-生命周期的劫持-增强';
import App1201 from './12_组件内容补充/01_ref的转发';
import App1202 from './12_组件内容补充/02_portals的使用';
import App1203 from './12_组件内容补充/03_fragments的使用';
import App1204 from './12_组件内容补充/04_strictMode的使用';

function App() {
  return (
    <div className="App">
      <h1>01_组件的定义方式</h1>
      {/* <App01 />
      <App0101 />
      <App0102 /> */}
      <h1>02_组件的生命周期</h1>
      {/* <App0201 /> */}
      <h1>03_组件间的通信</h1>
      {/* <App0301 />
      <App0302 />
      <App0303 />
      <App0304 />
      <App0305 /> */}
      <h1>04_组件通信案例</h1>
      {/* <App0401 /> */}
      <h1>05_React实现slot</h1>
      {/* <App0501 /> */}
      <h1>06_跨组件通信</h1>
      {/* <App0601 /> */}
      {/* <App0602 /> */}
      {/* <App0603 /> */}
      {/* <App0604 /> */}
      <h1>07_setState的使用</h1>
      {/* <App0701 /> */}
      {/* <App0702 /> */}
      {/* <App0703 /> */}
      {/* <App0704 /> */}
      {/* <App0705 /> */}
      <h1>08_React性能优化</h1>
      {/* <App0801 /> */}
      {/* <App0802 /> */}
      {/* <App0803 /> */}
      {/* <App0804 /> */}
      {/* <App0805 /> */}
      <h1>09_前面知识点的补充</h1>
      {/* <App0901 /> */}
      {/* <App0902 /> */}
      <h1>10_ref和受控和非受控组件</h1>
      {/* <App1001 /> */}
      {/* <App1002 /> */}
      {/* <App1003 /> */}
      {/* <App1004 /> */}
      {/* <App1005 /> */}
      <h1>01_高阶组件的使用</h1>
      {/* <App1101 name={"foo"} /> */}
      {/* <App1102 /> */}
      {/* <App1103 /> */}
      {/* <App1104 /> */}
      {/* <App1105 /> */}
      {/* <App1106 /> */}
      {/* <App1107 /> */}
      <h1>12_组件内容补充</h1>
      {/* <App1201 /> */}
      {/* <App1202 /> */}
      {/* <App1203 /> */}
      <App1204 />
    </div>
  );
}

export default App;
