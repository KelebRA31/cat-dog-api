import { ADD_LIKE, DEL_LIKE, ADD_LIKE_DOG } from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LIKE:
      return [...state, payload];

    case ADD_LIKE_DOG:
      return [...state, { id: '123', url: payload.message }];

    case DEL_LIKE:
      return state.filter((el) => el.url !== payload.url);

    default:
      return state;
  }
};
