import React, { PureComponent } from 'react';

function witeAuth(WrappedComponent) {
  return (props) => {
    const {isLogin} = props;
    if (isLogin) {
      return  <WrappedComponent {...props} />
    } else {
      return <LoginPage />
    }
  }
}

// 登录页面
class LoginPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>登录页面</h2>
      </div>
    )
  }
}

// 购物车组件
class CartPage extends PureComponent {
  render() {
    return (
      <div>
        <h2>CartPage</h2>
      </div>
    )
  }
}

// 加入鉴权的组件
const AuthCartPage = witeAuth(CartPage);

export default class App1105 extends PureComponent {
  render() {
    return (
      <div>
        <h2>App1105</h2>
        <AuthCartPage isLogin={false} />
      </div>
    );
  }
}
