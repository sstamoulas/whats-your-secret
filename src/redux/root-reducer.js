import { combineReducers } from 'redux';

import secretReducer from './secret/secret.reducer';
import colorReducer from './color/color.reducer';

const rootReducer = combineReducers({
  secret: secretReducer,
  color: colorReducer,
});

export default rootReducer;
