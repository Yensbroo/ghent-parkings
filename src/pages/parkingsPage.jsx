import React, { Component } from "react";

import ParkingCard from "../components/ParkingCard";
import { getParkings } from "../api/parkingAPI";

export default class ParkingsPage extends Component {
  constructor() {
    super();
    this.state = {
      parkings: [],
      loading: true,
      capacity: null,
      isParked: null
    };

    this.setParked = this.setParked.bind(this);
  }

  componentDidMount() {
    this.setParkings();
  }

  setParkings() {
    getParkings()
      .then(res => {
        this.setState({
          parkings: res.data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  setParked(e) {
    if (e.target.value === this.state.isParked) {
      this.setState({
        isParked: null,
        capacity: this.state.capacity - 1
      });
    } else {
      this.setState({
        isParked: e.target.value,
        capacity: this.state.capacity + 1
      });
    }
  }

  render() {
    const { parkings, isParked, capacity } = this.state;
    return (
      <div>
        <div className="header parkings">
          <h1>Public parkings Ghent</h1>
        </div>
        <div className="container">
          <div className="row">
            {parkings.map(parking => (
              <ParkingCard key={parking.id} parking={parking} park={this.setParked} state={isParked} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
