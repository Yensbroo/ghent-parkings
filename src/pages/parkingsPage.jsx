import React, { Component } from "react";
import axios from "axios";

import ParkingCard from "../components/parkingCard";
import { getParkings } from "../api/parkingAPI";
import { Images } from "../assets/js/parkingImages";

export default class parkingsList extends Component {
  constructor() {
    super();
    this.state = {
      parkings: [],
      loading: true,
      isParked: null
    };

    this.setParked = this.setParked.bind(this);
  }

  componentWillMount() {
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
    if (e.target.value == this.state.isParked) {
      this.setState({
        isParked: null
      });
    } else {
      this.setState({
        isParked: e.target.value
      });
    }
  }

  render() {
    const { parkings, isParked } = this.state;
    return (
      <div>
        <header>
          <h1>Public parkings Ghent</h1>
        </header>
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
