// 1. node 环境下（分版本呢），不能通过 ES6 导入
const redux = require('redux');

// 三个核心

const initialState = {
  counter: 0,
};

// 1. reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    case 'ADD_NUMBER':
      return { ...state, counter: state.counter + action.num };
    case 'SUB_NUMBER':
      return { ...state, counter: state.counter - action.num };
    default:
      return state;
  }
}
// 2. store
const store = redux.createStore(reducer);
// 3. action
const action1 = { type: 'INCREMENT' };
const action2 = { type: 'DECREMENT' };

const action3 = { type: 'ADD_NUMBER', num: 5 };
const action4 = { type: 'SUB_NUMBER', num: 12 };

// 订阅 store 的修改
store.subscribe(() => {
  console.log('state发生了改变', store.getState().counter);
});
// 先订阅在派发

// 派发 action
store.dispatch(action1);
store.dispatch(action2);
store.dispatch(action3);
store.dispatch(action4);
