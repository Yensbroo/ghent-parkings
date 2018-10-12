import {
  GET_PARKINGS,
  PARKINGS_LOADING
} from '../actions/types';

const initialState = {
  parkings: [],
  loading: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case PARKINGS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PARKINGS:
      return {
        ...state,
        parkings: action.payload,
        loading: false
      }
    default:
      return state;
  }
}