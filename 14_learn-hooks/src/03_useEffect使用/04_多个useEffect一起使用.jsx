import React, { useEffect, useState } from 'react';

export default function MultiEffectHookDemo() {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(0);
  // 多个逻辑可以放在多个 useEffect() 里面
  useEffect(() => {
    console.log('修改 DOM');
    document.title = count;
  }, [count]);
  useEffect(() => {
    console.log('订阅事件');
  }, []);
  useEffect(() => {
    console.log('网络请求');
  }, []);
  return (
    <div>
      <h2>MultiEffectHookDemo{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h2>{isLogin && 'Debbl'}</h2>
      <button onClick={() => setIsLogin(!isLogin)}>登录/注销</button>
    </div>
  );
}
