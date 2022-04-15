import React, { useState, useMemo } from 'react';

function calcNumber(count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    console.log('执行了');
    total += i;
  }
  return total;
}

export default function MemoHookDemo01() {
  const [count, setCount] = useState(10);
  const [show, setShow] = useState(true);

  // const total = calcNumber(count);

  // show 改变了，calcNumber 不会再执行
  const total = useMemo(() => calcNumber(count), [count]);

  return (
    <div>
      <h2>MemoHookDemo01</h2>
      <h2>总数：{total}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
}
