import { call, put } from 'redux-saga/effects';

import { loadHeroesSuccess, loadHeroesFail } from './actions';
import apiRef from '../../../Services/api';

export function* getCharacters({ offset, limit, orderBy, credentials }) {
  const api = apiRef(credentials.data.privateKey, credentials.data.publicKey);
  try {
    const {
      data: { data: myData },
    } = yield call(
      api.get,
      `/v1/public/characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}`,
    );
    myData.totalPages = Math.ceil(parseInt(myData.total / myData.limit));
    myData.actualPage = myData.offset / 10;
    yield put(loadHeroesSuccess(myData));
  } catch (err) {
    console.error(err);
    yield put(loadHeroesFail());
    alert('Houve ume erro');
    console.error(err);
  }
}
