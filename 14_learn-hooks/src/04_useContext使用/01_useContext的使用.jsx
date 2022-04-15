import React, { useContext } from 'react';
import { UserContext, ThemeContext } from '../App';

export default function ContextHookDemo() {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>ContextHookDemo</h2>
      <h2>
        {user.name}
        {user.age}
      </h2>
      <h2>{theme.color}</h2>
    </div>
  );
}
