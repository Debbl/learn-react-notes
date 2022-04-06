import store from './store/index.js';
import {
  addAction,
  decAction,
  incAction,
  subACtion,
} from './store/actionCreators.js';

// 订阅
store.subscribe(() => {
  console.log('state改变了', store.getState());
});

store.dispatch(addAction(10));
store.dispatch(addAction(8));
store.dispatch(subACtion(6));
store.dispatch(addAction(10));
store.dispatch(incAction());
store.dispatch(decAction());
