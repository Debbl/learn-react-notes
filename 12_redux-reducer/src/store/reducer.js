import { counterReducer } from './counter';
import { homeReducer } from './home';

const initialState = {
  counterInfo: {
    counter: 0,
  },
  homeInfo: {
    banners: [],
    recommends: [],
  },
};

function reducer(state = initialState, action) {
  return {
    counterInfo: counterReducer(state.counterInfo, action),
    homeInfo: homeReducer(state.homeInfo, action),
  };
}

export default reducer;
