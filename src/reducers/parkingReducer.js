import {
  GET_PARKINGS,
} from '../actions/types';

const initialState = {
  parkings: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PARKINGS:
      return {
        ...state,
        parkings: action.payload,
      }
    default:
      return state;
  }
}