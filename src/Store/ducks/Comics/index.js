import produce from 'immer';
import type from './types';

const INITIAL_STATE = {
  data: {
    offset: 0,
    limit: 10,
    results: [],
  },
  loading: false,
  error: false,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LOAD_COMICS_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = false;
      });
    case type.LOAD_COMICS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case type.LOAD_COMICS_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = true;
      });

    default:
      return state;
  }
};

export default reducer;
