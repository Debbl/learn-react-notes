import React, { useEffect } from 'react';
/**
 * 实现组件创建和销毁时打印的自定义 Hook
 */
const Home = () => {
  useLoggingLife('Home');
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};
const About = () => {
  useLoggingLife('About');
  return (
    <div>
      <h2>About</h2>
    </div>
  );
};

export default function CustomLifeHookDemo() {
  // useEffect(() => {
  //   console.log('CustomLifeHookDemo 组件被创建');
  //   return () => {
  //     console.log('CustomLifeHookDemo 组件被销毁');
  //   };
  // });
  useLoggingLife('CustomLifeHookDemo');
  return (
    <div>
      <h2>CustomLifeHookDemo</h2>
      <Home />
      <About />
    </div>
  );
}

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name} 组件被创建`);
    return () => {
      console.log(`${name} 组件被销毁`);
    };
  }, []);
}
