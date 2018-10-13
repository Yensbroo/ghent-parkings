import React from 'react';
import { shallow } from 'enzyme';
import ParkingDetail from '../ParkingDetail';
import * as parking from '../../data/parkings.json';



describe('ParkingCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ParkingDetail parking={parking.parkings[0]} />);
  });

  it('renders ParkingDetail component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('has image', () => {
    expect(wrapper.find('img').length).toBe(1);
  })

})