import React, { useReducer } from 'react';
import reducer from './reducer';

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <div>
      <h2>Home State：{state.counter}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
    </div>
  );
}
