import { all, takeLatest } from "redux-saga/effects";
import CharactersTypes from './Characters/types';
import { getCharacters } from './Characters/sagas';
export default function* rootSaga() {
  return yield all([
    takeLatest(CharactersTypes.LOAD_CHARACTERS_REQUEST, getCharacters),
  ]);
}