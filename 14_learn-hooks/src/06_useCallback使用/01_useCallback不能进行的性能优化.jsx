import React, { useCallback, useState } from 'react';

export default function CallbackHookDemo01() {
  const [count, setCount] = useState(0);
  const increment1 = () => {
    console.log('执行函数');
    setCount(count + 1);
  };
  const increment2 = useCallback(() => {
    console.log('执行函数 useCallback');
    // count 闭包
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <h2>CallbackHookDemo01--&gt; {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>
    </div>
  );
}
