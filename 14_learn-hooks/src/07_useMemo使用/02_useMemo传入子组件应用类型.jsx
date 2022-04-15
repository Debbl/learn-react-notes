import React, { useState, memo, useMemo } from 'react';

const DEInfo = memo((props) => {
  console.log('info 渲染了');
  return (
    <div>
      <h2>
        名字：{props.info.name}, 年龄：{props.info.age}
      </h2>
    </div>
  );
});

export default function MemoHookDemo02() {
  const [show, setShow] = useState(true);
  const info = useMemo(
    () => ({
      name: 'Debbl',
      age: 18,
    }),
    []
  );
  return (
    <div>
      <h2>MemoHookDemo02</h2>
      <DEInfo info={info} />
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
}
