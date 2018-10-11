import React, { Component } from "react";
import axios from "axios";

import { getParkings } from "../api/parkingAPI";

export default class parkingsList extends Component {
  constructor() {
    super();
    this.state = {
      parkings: [],
      loading: true
    };
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

  render() {
    const { parkings } = this.state;
    return (
      <div>
        {parkings.map(parking => (
          <p key={parking.id}>{parking.id}</p>
        ))}
      </div>
    );
  }
}
