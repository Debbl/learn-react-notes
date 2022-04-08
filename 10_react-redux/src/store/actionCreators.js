import {
  ADD_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  DECREMENT,
  INCREMENT,
  SUB_NUMBER,
} from './constants';

const incAction = () => ({
  type: INCREMENT,
});

const decAction = () => ({
  type: DECREMENT,
});

const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

// 轮播图 和 推荐 action
const changeBannersAction = (banners) => ({
  type: CHANGE_BANNERS,
  banners,
});

const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends,
});

export {
  incAction,
  decAction,
  addAction,
  subAction,
  changeBannersAction,
  changeRecommendsAction,
};
