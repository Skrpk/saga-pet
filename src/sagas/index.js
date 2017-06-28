import { take, call, put } from 'redux-saga/effects';
import API from '../Api';
import constants from '../constants/actionConstants';

function* getUsers() {
  const users = yield call(API.getUsers);
  yield put({
    type: constants.GET_USERS,
    payload: users.data,
  })
};

function* getUsersSaga() {
  while(true) {
    yield take(constants.USER_FETCH_REQUEST);
    yield call(getUsers);
  }
}

export default function* rootSaga() {
  yield getUsersSaga();
}
