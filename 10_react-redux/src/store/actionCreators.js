import axios from 'axios';
import {
  ADD_NUMBER,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  DECREMENT,
  FETCH_HOME_MULTIDATA,
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

// redux-thunk
const getHomeMultiDataAction = (dispatch, getState) => {
  console.log(getState(), '原来的state');
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
  }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannersAction(data.banner.list));
    dispatch(changeRecommendsAction(data.recommend.list));
  });
};

// redux-saga 拦截的 action
const fetchHomeMultiDataAction = {
  type: FETCH_HOME_MULTIDATA,
};

export {
  incAction,
  decAction,
  addAction,
  subAction,
  changeBannersAction,
  changeRecommendsAction,
  getHomeMultiDataAction,
  fetchHomeMultiDataAction,
};
