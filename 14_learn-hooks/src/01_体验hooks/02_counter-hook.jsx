import React, { useState } from 'react';

export default function CounterHook() {
  const [count, setCount] = useState(() => 10);

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((preValue) => preValue + 10)}>
        +10---
      </button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
