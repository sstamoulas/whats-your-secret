import SecretActionTypes from './secret.types';

const INITIAL_STATE = {
  'secrets': [],
  'error': '',
};

const secretReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SecretActionTypes.FETCH_SECRETS_SUCCESS:
      return {
        ...state,
        secrets: action.payload,
        error: null,
      };
    case SecretActionTypes.FETCH_SECRETS_START:
    case SecretActionTypes.SUBMIT_SECRET_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case SecretActionTypes.FETCH_SECRETS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default secretReducer;
