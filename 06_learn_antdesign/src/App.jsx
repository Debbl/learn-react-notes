import React from 'react';
import './App.less';
import App02 from '@/antdesign/App';
import App01 from './classnams/App';
import App03 from './comment/App';

export default function App() {
  return (
    <div>
      <h1>01_classnames</h1>
      {/* <App01 /> */}
      <h1>02_ant-design</h1>
      {/* <App02 /> */}
      <h1>03_案例</h1>
      <App03 />
    </div>
  );
}
