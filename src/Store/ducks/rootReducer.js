import { combineReducers } from 'redux';

import Credentials from './Credentials';
import Characters from './Characters';
import Comics from './Comics';

const appReducer = combineReducers({
  Credentials,
  Characters,
  Comics,
});

export default appReducer;
