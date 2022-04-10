import store from './store/index.js';
import { addAction, subAction } from './store/actionCreators.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addAction(6));
store.dispatch(subAction(6));
