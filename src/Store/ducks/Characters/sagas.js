import { call, put } from 'redux-saga/effects';

import md5 from 'md5';
import { loadHeroesSuccess, loadHeroesFail } from './actions';
import api from '../../../Services/api';

export function* getCharacters({ offset, limit, orderBy, credentials }) {
  const timestamp = Date.now();
  const hash = md5(
    timestamp + credentials.data.privateKey + credentials.data.publicKey,
  ).toString();
  try {
    const {
      data: { data: myData },
    } = yield call(
      api.get,
      `/v1/public/characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}&ts=${timestamp}&apikey=${credentials.data.publicKey}&hash=${hash}`,
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
