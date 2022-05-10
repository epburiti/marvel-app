import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadHeroesRequest = (offset, credentials) => ({
  type: Types.LOAD_CHARACTERS_REQUEST,
  offset,
  limit: 10,
  orderBy: '-modified',
  credentials
});

export const loadHeroesSuccess = (object) => ({
  type: Types.LOAD_CHARACTERS_SUCCESS,
  payload: object,
});
export const loadHeroesFail = () => ({
  type: Types.LOAD_CHARACTERS_FAIL,
});
