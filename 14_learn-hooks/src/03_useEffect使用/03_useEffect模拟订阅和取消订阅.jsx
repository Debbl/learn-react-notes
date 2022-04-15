import React, { useEffect, useState } from 'react';

export default function EffectHookCancelDome() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('订阅事件');
    return () => {
      console.log('取消事件');
    };
  }, []);
  return (
    <div>
      <h2>EffectHookCancelDome{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
