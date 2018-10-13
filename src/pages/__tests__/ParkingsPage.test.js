import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ParkingsPage from '../parkingsPage';
import ParkingCard from '../../components/parkingCard';
import * as parking from '../../data/parkings.json';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);

const initialState = {
  parking: {
    parkings: parking.parkings
  }
}
const store = mockStore(initialState);




describe('ParkingsPage component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ParkingsPage store={store} />).dive()
  })
  it('renders ParkingsPage Component', () => {
    console.log(wrapper.debug())
    expect(wrapper.length).toBe(1);
  });

  it('has div header', () => {
    expect(wrapper.containsMatchingElement(<h1>Public parkings Ghent</h1>)).toEqual(true);
  })

  it('has ParkingCard component', () => {
    expect(wrapper.find(ParkingCard).length).toBe(6);
  })

})