import {
  GET_PARKINGS,
} from './types';
const axios = require('axios');

const apiURL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';


// get the parking data from API
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

// get parking data from api and filter to one parking matching the parameter
export const getParking = (id) => dispatch => {
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
