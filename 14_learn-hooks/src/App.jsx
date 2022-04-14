import React from 'react';
import CounterClass from './01_体验hooks/01_counter-class';
import CounterHook from './01_体验hooks/02_counter-hook';
import MultiHookState from './02_useState使用/01_多个状态和复杂状态';
import ComplexHookState from './02_useState使用/02_复杂状态的修改';

export default function App() {
  return (
    <div>
      <h1>1. class组件-计数器</h1>
      <CounterClass />
      <h1>2. function 组件 hook - 计数器</h1>
      <CounterHook />
      <h1>3. useState 多个状态</h1>
      <MultiHookState />
      <h1>4. 复杂状态的修改</h1>
      <ComplexHookState />
    </div>
  );
}
