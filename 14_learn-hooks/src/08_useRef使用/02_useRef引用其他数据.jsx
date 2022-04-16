import React, { useEffect, useRef, useState } from 'react';

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);
  const numRef = useRef(count);

  console.log(numRef);
  useEffect(() => {
    numRef.current = count;
  }, [count]);
  return (
    <div>
      <h2>RefHookDemo02 numRef: {numRef.current}</h2>
      <h2>Count: {count}</h2>
      <h2>Count 上一次的值： {numRef.current}</h2>
      <h2>Count 这一次的值： {count}</h2>
      <button onClick={() => setCount(count + 10)}>+10</button>
    </div>
  );
}
