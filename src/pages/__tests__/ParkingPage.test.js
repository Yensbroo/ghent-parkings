import React from 'react';
import { shallow } from 'enzyme';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ParkingPage from '../parkingPage'
import * as parking from '../../data/parkings.json';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initialState = {
  parking: {
    parkings: parking.parkings
  }
}
const store = mockStore(initialState);




describe('ParkingPage component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ParkingPage store={store} />);
  })

  it('renders component', () => {
    expect(wrapper.length).toBe(1);
  })

})