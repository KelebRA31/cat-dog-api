import { GET_CAT, GET_DOG } from '../types/types';

export const getCat = (data) => ({ type: GET_CAT, payload: data });
export const getDog = (data) => ({ type: GET_DOG, payload: data });

export const getCatThunk = () => (dispatch) => {
  dispatch({ type: 'FETCH_CAT' });
  fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then((res) => res.json())
    .then((res) => {
      dispatch(getCat(res));
      console.log(res);
    });
};

export const getDogThunk = () => (dispatch) => {
  dispatch({ type: 'FETCH_DOG' });
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => res.json())
    .then((res) => {
      dispatch(getDog(res));
    });
};
