const axios = require('axios');

import {
  GET_PARKINGS,
  PARKINGS_LOADING
} from './types';

const apiURL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';


export const getParkings = () => dispatch => {
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