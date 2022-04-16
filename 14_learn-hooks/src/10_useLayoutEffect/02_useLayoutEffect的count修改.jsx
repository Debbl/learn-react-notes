import React, { useLayoutEffect, useState } from 'react';

export default function LayoutEffectCounterDemo() {
  const [count, setCount] = useState(10);

  useLayoutEffect(() => {
    if (count === 0) {
      setCount(Math.random());
    }
  }, [count]);
  return (
    <div>
      <h2>LayoutEffectCounterDemo</h2>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(0)}>修改数字</button>
    </div>
  );
}
