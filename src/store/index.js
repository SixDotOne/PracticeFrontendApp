import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import test from '../reducers/tests';

const rootReducer = combineReducers({
  form: formReducer,
  test
});

export default rootReducer;