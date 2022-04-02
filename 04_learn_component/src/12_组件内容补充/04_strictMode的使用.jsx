import React, { PureComponent, StrictMode } from 'react';

class Home extends PureComponent {
  constructor(props) {
    super(props);

    console.log("home constructor");
  }

  UNSAFE_componentWillMount() {
    console.log("Home componentWillMount");
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    )
  }
}

class Profile extends PureComponent {
  constructor(props) {
    super(props);

    console.log("Profile constructor");
  }
  UNSAFE_componentWillMount() {
    console.log("Profile componentWillMount");
  }
  render() {
    return (
      <div>
        <h2>Profile</h2>
      </div>
    )
  }
}

export default class App1204 extends PureComponent {
  render() {
    return (
      <div>
        <StrictMode>
          <Home />
        </StrictMode>
        <Profile />
      </div>
    );
  }
}
