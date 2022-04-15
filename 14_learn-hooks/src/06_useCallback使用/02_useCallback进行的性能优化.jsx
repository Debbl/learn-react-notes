import React, { useCallback, useState, memo } from 'react';
/**
 * 改变 show 的值，btn1 会渲染，btn2 不会渲染
 */
const DEButton = memo((props) => {
  console.log('DEButton重新渲染', props.title);
  return (
    <div>
      <button onClick={props.increment}>useCallback +1</button>
    </div>
  );
});

export default function CallbackHookDemo02() {
  console.log('CallbackHookDemo02重新渲染');
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);
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
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <DEButton increment={increment1} title={'btn1'} />
      <DEButton increment={increment2} title={'btn2'} />
      <button onClick={() => setShow(!show)}>show切换</button>
    </div>
  );
}
