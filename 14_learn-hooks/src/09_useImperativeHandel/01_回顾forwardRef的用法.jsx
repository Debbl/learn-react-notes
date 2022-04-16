import React, { useRef, forwardRef } from 'react';

const DEInput = forwardRef((props, ref) => {
  return (
    <div>
      <input ref={ref} type={'text'} />
    </div>
  );
});

export default function ForwardRefDemo() {
  const inputRef = useRef();
  return (
    <div>
      <h2>ForwardRefDemo</h2>
      <DEInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
