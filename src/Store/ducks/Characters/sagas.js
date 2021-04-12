import { call, put } from 'redux-saga/effects';

import { loadHeroesSuccess, loadHeroesFail } from './actions';
import apiRef from '../../../Services/api';

export function* getCharacters({ offset, limit, orderBy, credentials }) {
  const api = apiRef(credentials.data.private_key, credentials.data.public_key);
  try {
    const { data: { data: myData } } =
      yield call(api.get,
        `/v1/public/characters?orderBy=${orderBy}&limit=${limit}&offset=${offset}&apikey=${credentials.data.public_key}`,
      );
    myData.total_pages = Math.ceil(parseInt(myData.total / myData.limit));
    myData.actual_page = myData.offset / 10;
    console.log('response saga: ', myData)
    yield put(loadHeroesSuccess(myData));
  } catch (err) {
    console.error(err)
    yield put(loadHeroesFail());
    alert("Houve ume erro");
    console.error(err);
  }
}