import SecretActionTypes from './secret.types';

export const submitSecretStart = (secret) => ({
  type: SecretActionTypes.SUBMIT_SECRET_START,
  payload: { secret },
});

export const submitSecretSuccess = () => ({
  type: SecretActionTypes.SUBMIT_SECRET_SUCCESS,
});

export const submitSecretFailure = (error) => ({
  type: SecretActionTypes.SUBMIT_SECRET_FAILURE,
  payload: error,
});

export const fetchSecretsStart = () => ({
  type: SecretActionTypes.FETCH_SECRETS_START,
});

export const fetchSecretsSuccess = (secrets) => ({
  type: SecretActionTypes.FETCH_SECRETS_SUCCESS,
  payload: secrets,
});

export const fetchSecretsFailure = (error) => ({
  type: SecretActionTypes.FETCH_SECRETS_FAILURE,
  payload: error,
});
