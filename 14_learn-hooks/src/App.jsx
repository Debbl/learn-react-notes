import React from 'react';
import CounterClass from './01_体验hooks/01_counter-class';
import CounterHook from './01_体验hooks/02_counter-hook';

export default function App() {
  return (
    <div>
      <h1>1. class组件-计数器</h1>
      <CounterClass />
      <h1>2. function 组件 hook - 计数器</h1>
      <CounterHook />
    </div>
  );
}
