import axios from 'axios';
import { takeEvery, put, all, takeLatest } from 'redux-saga/effects';
import {
  changeBannersAction,
  changeRecommendsAction,
} from './home/actionCreators';
import { FETCH_HOME_MULTIDATA } from './home/constants';

function* fetchHomeMultiData(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata');
  console.log(res);
  // yield put(changeBannersAction(res.data.data.banner.list));
  // yield put(changeRecommendsAction(res.data.data.recommend.list));
  yield all([
    yield put(changeBannersAction(res.data.data.banner.list)),
    yield put(changeRecommendsAction(res.data.data.recommend.list)),
  ]);
}

function* mySaga() {
  // 每一个 action 都会执行这里的
  // yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultiData);、

  // action 多次，被打断，只用最后一个会执行这里
  yield takeLatest(FETCH_HOME_MULTIDATA, fetchHomeMultiData);
}

// 导出一个生成器函数
export default mySaga;
