import type from './types';
import produce from 'immer';

const INITIAL_STATE =
{
  data: {
    results: []
  },
  loading: false,
  error: false
}
  ;

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LOAD_CHARACTERS_REQUEST:
      return produce(state, (draft) => {
        console.log("LOAD_CHARACTERS_REQUEST")
        draft.loading = true;
        draft.error = false;
      });
    case type.LOAD_CHARACTERS_SUCCESS:
      return produce(state, (draft) => {
        console.log("sucesso: ", action);
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case type.LOAD_CHARACTERS_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = true;
      });

    default:
      return state;
  }
};

export default reducer;