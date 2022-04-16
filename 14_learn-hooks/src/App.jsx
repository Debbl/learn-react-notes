import React, { createContext, useState } from 'react';
import CounterClass from './01_体验hooks/01_counter-class';
import CounterHook from './01_体验hooks/02_counter-hook';
import MultiHookState from './02_useState使用/01_多个状态和复杂状态';
import ComplexHookState from './02_useState使用/02_复杂状态的修改';
import ClassCounterTitleChange from './03_useEffect使用/01_class实现title的修改';
import CounterHookChange from './03_useEffect使用/02_hook实现title的修改';
import EffectHookCancelDome from './03_useEffect使用/03_useEffect模拟订阅和取消订阅';
import MultiEffectHookDemo from './03_useEffect使用/04_多个useEffect一起使用';
import ContextHookDemo from './04_useContext使用/01_useContext的使用';
import Home from './05_useReducer使用/home';
import Profile from './05_useReducer使用/profile';
import CallbackHookDemo01 from './06_useCallback使用/01_useCallback不能进行的性能优化';
import CallbackHookDemo02 from './06_useCallback使用/02_useCallback进行的性能优化';
import MemoHookDemo01 from './07_useMemo使用/01_useMemo复杂计算的应用';
import MemoHookDemo02 from './07_useMemo使用/02_useMemo传入子组件应用类型';
import RefHookDemo01 from './08_useRef使用/01_useRef引入DOM';
import RefHookDemo02 from './08_useRef使用/02_useRef引用其他数据';
import ForwardRefDemo from './09_useImperativeHandel/01_回顾forwardRef的用法';
import ImperativeHandelDemo from './09_useImperativeHandel/02_useImperativeHandel用法';

export const UserContext = createContext();
export const ThemeContext = createContext();

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>1. class组件-计数器</h1>
      {/* <CounterClass /> */}
      <h1>2. function 组件 hook - 计数器</h1>
      {/* <CounterHook /> */}
      <h1>3. useState 多个状态</h1>
      {/* <MultiHookState /> */}
      <h1>4. 复杂状态的修改</h1>
      {/* <ComplexHookState /> */}
      <h1>5. useEffect()的使用</h1>
      {/* <ClassCounterTitleChange /> */}
      {/* <CounterHookChange /> */}
      {/* {show && <EffectHookCancelDome />} */}
      {/* <MultiEffectHookDemo /> */}
      <button onClick={() => setShow(!show)}>切换</button>
      <h1>6. useContext()的使用</h1>
      {/* <UserContext.Provider value={{ name: 'debbl', age: 18 }}>
        <ThemeContext.Provider value={{ fontSize: '30px', color: 'red' }}>
          <ContextHookDemo />
        </ThemeContext.Provider>
      </UserContext.Provider> */}
      <h1>7. useReducer()的使用</h1>
      {/* <Home />
      <Profile /> */}
      <h1>8. useCallback()的使用</h1>
      {/* <CallbackHookDemo01 />
      <CallbackHookDemo02 /> */}
      <h1>9. useMemo()的使用</h1>
      {/* <MemoHookDemo01 /> */}
      {/* <MemoHookDemo02 /> */}
      <h1>10. useRef()的使用</h1>
      {/* <RefHookDemo01 /> */}
      {/* <RefHookDemo02 /> */}
      <h1>11. useImperativeHandel()使用</h1>
      {/* <ForwardRefDemo /> */}
      <ImperativeHandelDemo />
    </div>
  );
}
