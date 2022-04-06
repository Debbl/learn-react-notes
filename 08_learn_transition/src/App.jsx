import React from 'react';
import CSSTransitionDemo from './transition/CSSTransitionDemo';
import SwitchTransitionDemo from './transition/SwitchTransitionDemo';
import TransitionGroupDome from './transition/TransitionGroupDome';

export default function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h1>CSSTransition</h1>
      <CSSTransitionDemo />
      <h1>SwitchTransition</h1>
      <SwitchTransitionDemo />
      <h1>TransitionGroup</h1>
      <TransitionGroupDome />
    </div>
  );
}
