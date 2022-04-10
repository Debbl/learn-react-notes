import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducer';

import saga from './saga';

// 1. 引入 thunk 中间件
// composeEnhances 合并 Enhancers
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// 2. 创建 sagaMiddleware 中间件
const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

// 运行 sagaMiddleware
sagaMiddleware.run(saga);

export default store;
