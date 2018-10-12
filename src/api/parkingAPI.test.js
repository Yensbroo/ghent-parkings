import React from 'react';
import renderer from 'react-test-renderer';

import * as ParkingAPI from './parkingAPI';

describe('Get Parking States From API', () => {
  it('Fetching data from Ghent', async () => {
    const parkings = await ParkingAPI.getParkings();
    expect(parkings.data.length).toBe(6);
  });
});