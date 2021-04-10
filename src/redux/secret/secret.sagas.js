import { takeLatest, put, all, call } from 'redux-saga/effects';

import SecretActionTypes from './secret.types';

import { 
  submitSecretSuccess, 
  submitSecretFailure,
  fetchSecretsSuccess,
  fetchSecretsFailure,
} from './../secret/secret.actions';

import { getAllSecrets, submitSecret } from '../../firebase/firebase.utils';

export function* submitSecretAsync({ payload: { secret }}) {
  try {
    yield call(submitSecret, secret);
    yield put(submitSecretSuccess());
  } catch(error) {
    yield put(submitSecretFailure(error));
  }
}

export function* fetchSecretsAsync() {
  try {
    const secrets = yield call(getAllSecrets);
    yield put(fetchSecretsSuccess(secrets));
  } catch(error) {
    yield put(fetchSecretsFailure(error));
  }
}

export function* onSubmitSecretStart() {
  yield takeLatest(
    SecretActionTypes.SUBMIT_SECRET_START, 
    submitSecretAsync
  );
}

export function* onFetchSecretsStart() {
  yield takeLatest(
    SecretActionTypes.FETCH_SECRETS_START, 
    fetchSecretsAsync
  );
}

export function* secretSagas() {
  yield all([
    call(onSubmitSecretStart),
    call(onFetchSecretsStart),
  ]);
}
