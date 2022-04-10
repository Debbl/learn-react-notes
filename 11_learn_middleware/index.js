import store from './store/index.js';
import { addAction, subAction } from './store/actionCreators.js';

store.subscribe(() => {
  console.log(store.getState());
});

/**
 * 需求
 * 获取 action 前后的状态
 * 记录日志
 */

// 1. 基本做法
// console.log('dispatch前 - action --> ', addAction(10));
// store.dispatch(addAction(10));
// console.log('dispatch后 - new state --> ', store.getState());

// console.log('dispatch前 - action --> ', subAction(6));
// store.dispatch(subAction(6));
// console.log('dispatch后 - new state --> ', store.getState());

// 2. 封装一个函数
// function dispatchAndLogging(action) {
//   console.log('dispatch前 - action --> ', action);
//   store.dispatch(action);
//   console.log('dispatch后 - new state --> ', store.getState());
// }
// dispatchAndLogging(addAction(10));
// dispatchAndLogging(subAction(5));

// 3. 函数的基础之上进行优化， 修改原有的 dispatch
// hack技术：monkey patch
// const next = store.dispatch;
// function dispatchAndLogging(action) {
//   console.log('dispatch前 - action --> ', action);
//   next(action);
//   console.log('dispatch后 - new state --> ', store.getState());
// }
// store.dispatch = dispatchAndLogging;
// store.dispatch(addAction(10));
// store.dispatch(subAction(5));

// 4. 将之前的操作进行封装
function patchLogging(store) {
  const next = store.dispatch;
  function dispatchAndLogging(action) {
    console.log('dispatch前 - action --> ', action);
    next(action);
    console.log('dispatch后 - new state --> ', store.getState());
  }
  store.dispatch = dispatchAndLogging;
}
// patchLogging(store);

// store.dispatch(addAction(10));
// store.dispatch(subAction(5));

// 5. 封装 patchThunk 功能
function patchThunk(store) {
  const next = store.dispatch;
  function dispatchAndThunk(action) {
    if (typeof action === 'function') {
      action(store.dispatch, store.getState);
    } else {
      next(action);
    }
  }
  store.dispatch = dispatchAndThunk;
}

patchThunk(store);

function foo(dispatch, getState) {
  console.log(dispatch, getState);
  dispatch(subAction(10));
}

store.dispatch(foo);

store.dispatch(addAction(10));
store.dispatch(subAction(5));

// 6. 封装 applyMiddleware
function applyMiddleware(...middleware) {
  const newMiddleware = [...middleware];
  newMiddleware.forEach((middleware) => {
    middleware(store);
  })
}

applyMiddleware(patchLogging, patchThunk);
