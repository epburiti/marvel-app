import { combineReducers } from 'redux';

import Credentials from './Credentials';
import Characters from './Characters';


const appReducer = combineReducers({
  Credentials,
  Characters
});

export default appReducer;