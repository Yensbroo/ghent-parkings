const axios = require('axios')

const apiURL = 'https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json';


export const getParkings = () => {
  return axios.get(apiURL);
}