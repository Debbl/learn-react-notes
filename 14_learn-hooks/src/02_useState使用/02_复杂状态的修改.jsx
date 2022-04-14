import React, { useState } from 'react';

export default function ComplexHookState() {
  const [friends, setFriends] = useState([
    { name: 'foo', age: 18 },
    { name: 'bar', age: 19 },
  ]);

  function addFriend() {
    friends.push({ name: 'hmm', age: 11 });
    setFriends(friends);
  }

  function incrementAgeWithIndex(index) {
    const newFriends = [...friends];
    newFriends[index].age += 1;
    setFriends(newFriends);
  }

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={friend.name}>
            {friend.name} 年龄：{friend.age}
            <button onClick={() => incrementAgeWithIndex(index)}>age+1</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setFriends([...friends, 'tom'])}>添加朋友</button>
      <button onClick={addFriend}>添加朋友</button>
    </div>
  );
}
