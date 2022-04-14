import React, { useState } from 'react';

export default function MultiHookState() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const [friends, setFriends] = useState(['foo', 'bar']);
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <h2>我的年龄：{age}</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}
