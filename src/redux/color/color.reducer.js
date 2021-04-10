import ColorActionTypes from './color.types';
import { generateRandomColor } from './color.utils';

const INITIAL_STATE = {
  'currentColor': '#000',
};

const colorReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ColorActionTypes.GENERATE_RANDOM_COLOR:
      return {
        ...state,
        currentColor: generateRandomColor(),
      };
    default:
      return state;
  }
}

export default colorReducer;
