import { GET_INITIAL_DATA, SET_LOADING } from './types';

const BASE_URL = 'https://api.spacexdata.com/v3/launches?limit=100';

export const getInitialSpaceData = () => async dispatch => {
  try {
    dispatch({
      type: SET_LOADING
    });
    const res = await fetch(BASE_URL);
    const data = await res.json();
    dispatch({
      type: GET_INITIAL_DATA,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};