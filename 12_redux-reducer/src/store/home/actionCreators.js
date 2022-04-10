import axios from 'axios';
import {
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA,
} from './constants';

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
  changeBannersAction,
  changeRecommendsAction,
  getHomeMultiDataAction,
  fetchHomeMultiDataAction,
};
