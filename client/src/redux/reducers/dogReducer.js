import { GET_DOG } from '../types/types';

export default (state = { dogImg: null, loading: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_DOG:
      return { ...state, dogImg: payload, loading: false };

    case 'FETCH_DOG':
      return { ...state, loading: true };

    default:
      return state;
  }
};
