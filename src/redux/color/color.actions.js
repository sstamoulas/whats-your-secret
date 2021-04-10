import ColorActionTypes from './color.types';

export const generateRandomColor = () => ({
  type: ColorActionTypes.GENERATE_RANDOM_COLOR,
});
