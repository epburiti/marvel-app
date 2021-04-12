import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadHeroesRequest = (
  offset,
  limit,
  orderBy,
  credentials,
  characterID
) => ({
  type: Types.LOAD_COMICS_REQUEST,
  offset,
  limit,
  orderBy,
  credentials,
  characterID,
});

export const loadHeroesSuccess = (object) => ({
  type: Types.LOAD_COMICS_SUCCESS,
  payload: object,
});
export const loadHeroesFail = () => ({
  type: Types.LOAD_COMICS_FAIL,
});
