import React from 'react';
import { shallow } from 'enzyme';
import ParkingCard from '../ParkingCard';
import * as parking from '../../data/parkings.json';
import * as capacity from '../../data/capacity.json';




describe('ParkingCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ParkingCard parking={parking.parkings[0]} capacity={capacity.items} />);
  })
  it('renders ParkingCard component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('has image element', () => {
    expect(wrapper.find('img').length).toBe(1);
  })

  it('has button element', () => {
    expect(wrapper.find('button').length).toBe(1);
  })



})