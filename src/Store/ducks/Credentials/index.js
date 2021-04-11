import type from './types';
import produce from 'immer';

const INITIAL_STATE =
{
  data: {
    private_key: "",
    public_key: "",
  }
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SET_CREDENTIALS:
      return produce(state, (draft) => {
        draft.data = action.payload;
      });
    default:
      return state;
  }
};

export default reducer;