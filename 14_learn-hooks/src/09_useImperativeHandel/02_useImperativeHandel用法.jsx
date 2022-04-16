import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const DEInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        console.log('imperativeHandel-->');
        inputRef.current.focus();
      },
    }),
    [inputRef]
  );
  return (
    <div>
      <input ref={inputRef} type={'text'} />
    </div>
  );
});

export default function ImperativeHandelDemo() {
  const inputRef = useRef();
  return (
    <div>
      <h2>ForwardRefDemo</h2>
      <DEInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>聚焦</button>
    </div>
  );
}
