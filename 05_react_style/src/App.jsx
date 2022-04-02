import React from 'react';
import App0101 from './01_内联样式/App';
import App0201 from './02_普通的CSS/app';
import App0301 from './03_css_modules/app';
import App0401 from './04_styled-components/app';

export default function App() {
  return (
    <div>
      <h1>01_内联样式</h1>
      {/* <App0101 /> */}
      <h1>02_普通的CSS</h1>
      {/* <App0201 /> */}
      <h1>03_CSS_Module</h1>
      {/* <App0301 /> */}
      <h1>04_styled-components</h1>
      <App0401 />
    </div>
  );
}
