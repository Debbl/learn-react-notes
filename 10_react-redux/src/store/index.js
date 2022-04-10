import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

// composeEnhances 合并 Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
