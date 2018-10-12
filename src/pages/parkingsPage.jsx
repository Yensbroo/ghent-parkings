import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getParkings } from "../actions/parkingActions";

import ParkingCard from "../components/ParkingCard";
//import { getParkings } from "../api/parkingAPI";

class ParkingsPage extends Component {
  constructor() {
    super();
    this.state = {
      capacity: null,
      isParked: null
    };

    this.setParked = this.setParked.bind(this);
  }

  componentDidMount() {
    this.props.getParkings();
  }

  setParked(e) {
    const { parkings } = this.props.parking;
    if (e.target.value === this.state.isParked) {
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
    const { parkings } = this.props.parking;
    console.log(parkings);
    const { isParked, capacity } = this.state;
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

ParkingsPage.propTypes = {
  parking: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  parking: state.parking
});

export default connect(
  mapStateToProps,
  {
    getParkings
  }
)(ParkingsPage);
