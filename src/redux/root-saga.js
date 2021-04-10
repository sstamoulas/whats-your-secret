import { all, call } from 'redux-saga/effects';

import { secretSagas } from './secret/secret.sagas';

export default function* rootSaga() {
  yield all([
    call(secretSagas),
  ]);
}
