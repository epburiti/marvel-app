import produce from 'immer';
import type from './types';

const INITIAL_STATE = {
  data: {
    privateKey: '',
    publicKey: '',
  },
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
