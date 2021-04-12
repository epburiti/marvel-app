import { all, takeLatest } from 'redux-saga/effects';
import CharactersTypes from './Characters/types';
import ComicsTypes from './Comics/types';
import { getCharacters } from './Characters/sagas';
import { getComics } from './Comics/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.LOAD_CHARACTERS_REQUEST, getCharacters),
    takeLatest(ComicsTypes.LOAD_COMICS_REQUEST, getComics),
  ]);
}
