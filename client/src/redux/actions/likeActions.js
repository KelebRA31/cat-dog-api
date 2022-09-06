import { ADD_LIKE, DEL_LIKE, ADD_LIKE_DOG } from '../types/types';

export const addLike = (data) => ({ type: ADD_LIKE, payload: data });
export const delLike = (data) => ({ type: DEL_LIKE, payload: data });
export const addLikeDog = (data) => ({ type: ADD_LIKE_DOG, payload: data });
