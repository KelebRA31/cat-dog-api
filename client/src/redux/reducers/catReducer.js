import { GET_CAT } from '../types/types';

export default (state = { catImg: null, loading: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CAT:
      return { ...state, catImg: payload, loading: false };

    case 'FETCH_CAT':
      return { ...state, loading: true };

    default:
      return state;
  }
};
