import React, { PureComponent } from 'react';
import { Navigate } from 'react-router';

export default class User extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    };
  }
  render() {
    return (
      <>
        {!this.state.isLogin && <Navigate to={'/login'} replace />}
        <div>
          <h2>User</h2>
          <h2>name: Debbl</h2>
        </div>
      </>
    );
  }
}
