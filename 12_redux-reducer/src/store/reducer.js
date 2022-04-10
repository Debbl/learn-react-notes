import { ADD_NUMBER, CHANGE_BANNERS, CHANGE_RECOMMEND, DECREMENT, INCREMENT, SUB_NUMBER } from './constants';

const initialState = {
  counter: 0,
  banners: [],
  recommends: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };
    case CHANGE_BANNERS:
      return {...state, banners: action.banners};
    case CHANGE_RECOMMEND:
      return {...state, recommends: action.recommends}
    default:
      return state;
  }
}

export default reducer;
