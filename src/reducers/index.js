import {
  combineReducers
} from 'redux';
import parkingReducer from './parkingReducer'

export default combineReducers({
  parking: parkingReducer
})