import { CHANGE_BANNERS, CHANGE_RECOMMEND } from './constants';

const initialState = {
  banners: [],
  recommends: [],
};

// 拆分 homeReducer
function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners };
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends };
    default:
      return state;
  }
}

export default homeReducer;
