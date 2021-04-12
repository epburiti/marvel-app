import { call, put } from 'redux-saga/effects';

import { loadHeroesSuccess, loadHeroesFail } from './actions';
import apiRef from '../../../Services/api';

export function* getComics({
  offset,
  limit,
  orderBy,
  credentials,
  characterID,
}) {
  const api = apiRef(credentials.data.privateKey, credentials.data.publicKey);
  console.log('aquiiiiii: ', offset, limit, orderBy, credentials, characterID);
  try {
    const {
      data: { data: myData },
    } = yield call(
      api.get,
      `/v1/public/characters/${characterID}/comics?orderBy=${orderBy}&limit=${limit}&offset=${offset}&apikey=${credentials.data.publicKey}`
    );
    myData.totalPages = Math.ceil(parseInt(myData.total / myData.limit));
    myData.actualPage = myData.offset / 10;
    console.log('saga comics: ', myData);
    yield put(loadHeroesSuccess(myData));
  } catch (err) {
    console.error(err);
    yield put(loadHeroesFail());
    alert('Houve ume erro');
    console.error(err);
  }
}