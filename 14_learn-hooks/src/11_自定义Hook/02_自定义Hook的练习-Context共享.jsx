import React, { useContext } from 'react';
import { UserContext } from '../App';
import useUserContext from '../hooks/user-hook';

export default function CustomContextShareHook() {
  const user = useContext(UserContext);
  const [user1, token1] = useUserContext();
  return (
    <div>
      <h2>CustomContextShareHook</h2>
      <h2>{user.name}</h2>
      <h2>
        {user1.name} {user1.age}
      </h2>
      <h2>{token1.token}</h2>
    </div>
  );
}
