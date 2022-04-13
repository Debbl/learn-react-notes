import React, { PureComponent } from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

export function History() {
  return (
    <>
      <h2>History</h2>
    </>
  );
}
export function Culture() {
  return (
    <>
      <h2>Culture</h2>
    </>
  );
}
export function Connect() {
  return (
    <>
      <h2>Connect</h2>
    </>
  );
}
export default class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About</h2>
        <NavLink to={'history'}>企业历史</NavLink>
        <NavLink to={'culture'}>企业文化</NavLink>
        <NavLink to={'connect'}>联系我们</NavLink>

        <Routes>
          <Route path="/history" element={<History />} />
          <Route path="culture" element={<Culture />} />
          <Route path="connect" element={<Connect />} />
        </Routes>
      </div>
    );
  }
}
