import React, { useRef } from 'react';

class TestCpn extends React.Component {
  render() {
    return (
      <div>
        <h2>Test cpn</h2>
      </div>
    );
  }
}

function TestCpn2() {
  return (
    <div>
      <h2>TestCpn2</h2>
    </div>
  );
}

export default function RefHookDemo01() {
  const titleRef = useRef();
  const inputRef = useRef();
  const testRef = useRef();
  const testRef2 = useRef();
  console.log(titleRef);

  function changeDOM() {
    titleRef.current.innerHTML = 'Hello world!';
    inputRef.current.focus();
    console.log(testRef.current);
    console.log(testRef2.current);
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo01</h2>
      <input ref={inputRef} type="text" />

      <TestCpn ref={testRef} />
      {/* 函数组件不能使用 ref, 可以用 React.forwardRef() 包裹 */}
      {/* <TestCpn2 ref={testRef2} /> */}
      <button onClick={() => changeDOM()}>修改DOM</button>
    </div>
  );
}
