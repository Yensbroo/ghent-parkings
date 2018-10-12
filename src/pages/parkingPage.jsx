import React, { Component } from "react";
import { getParkings } from "../api/parkingAPI";
import ParkingDetail from "../components/ParkingDetail";

export default class ParkingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parking: [],
      isParked: null,
      loading: true
    };
  }

  componentDidMount() {
    this.setParking();
  }

  setParking() {
    getParkings()
      .then(res => {
        let data = res.data;
        data = data.filter(parking => {
          return parking.id == this.props.match.params.id;
        });
        this.setState({
          parking: data,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { parking } = this.state;

    return (
      <div>
        {parking.map(item => (
          <ParkingDetail key={item.id} parking={item} />
        ))}
      </div>
    );
  }
}
