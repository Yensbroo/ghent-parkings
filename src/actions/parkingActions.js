import {
  GET_PARKINGS,
  PARKINGS_LOADING
} from './types';
const axios = require('axios');

const apiURL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';


export const getParkings = () => dispatch => {
  dispatch(setParkingsLoading());

  axios
    .get(apiURL)
    .then(res => {
      dispatch({
        type: GET_PARKINGS,
        payload: res.data
      })
    }).catch(err =>
      dispatch({
        type: GET_PARKINGS,
        payload: null
      }))
}

export const getParking = (id) => dispatch => {
  dispatch(setParkingsLoading());
  axios
    .get(apiURL)
    .then(res => {
      let data = res.data.filter(parking => {
        return parking.id == id
      });

      dispatch({
        type: GET_PARKINGS,
        payload: data
      })
    }).catch(err =>
      dispatch({
        type: GET_PARKINGS,
        payload: null
      }))
}

export const setParkingsLoading = () => dispatch => {
  dispatch({
    type: PARKINGS_LOADING
  })
}