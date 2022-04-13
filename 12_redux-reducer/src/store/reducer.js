import { combineReducers } from 'redux';
import { counterReducer } from './counter';
import { homeReducer } from './home';

// const initialState = {
//   counterInfo: {
//     counter: 0,
//   },
//   homeInfo: {
//     banners: [],
//     recommends: [],
//   },
// };

// function reducer(state = initialState, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action),
//   };
// }
// 合并多个 reducer
const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer,
});
export default reducer;
