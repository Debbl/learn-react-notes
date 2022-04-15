import React, { useState } from 'react';

export default function CounterHook() {
  const [count, setCount] = useState(() => 10);

  function handleClick() {
    // 只会 + 10
    // setCount(count + 10);
    // setCount(count + 10);
    // setCount(count + 10);
    // setCount(count + 10);

    // 符合预期
    setCount((preCount) => preCount + 10);
    setCount((preCount) => preCount + 10);
    setCount((preCount) => preCount + 10);
    setCount((preCount) => preCount + 10);
  }
  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount((preValue) => preValue + 10)}>
        +10---
      </button>
      <button onClick={handleClick}>++++</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}
