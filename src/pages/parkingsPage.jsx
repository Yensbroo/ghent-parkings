import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getParkings } from "../actions/parkingActions";

import ParkingCard from "../components/ParkingCard";

export class ParkingsPage extends Component {
  constructor() {
    super();
    this.state = {
      capacity: [],
      isParked: null
    };

    this.setParked = this.setParked.bind(this);
    this.setCapacity = this.setCapacity.bind(this);
  }

  componentDidMount() {
    this.props.getParkings();
  }

  componentDidUpdate(prevProps) {
    // run setCapacity function after the data is loaded and component is rendered
    if (this.props.parking !== prevProps.parking) {
      this.setCapacity();
    }
  }

  setCapacity() {
    const { parkings } = this.props.parking;
    let capacity = [];

    // for each parking push the id and capacity to a new array
    parkings.map(parking => {
      return capacity.push({ id: parking.id, capacity: parking.parkingStatus.availableCapacity });
    });

    // store the new array in the capacity state
    this.setState({
      capacity: capacity
    });
  }

  setParked(e) {
    let arr = this.state.capacity;
    // Find index of the target value in the array
    const newCapacity = arr.findIndex(parking => parking.id == e.target.value);

    // if the value of the parking is equal to the value stored in the isParked state
    // add 1 to the given parking's capacity
    // else subtract 1 from the capacity
    if (e.target.value === this.state.isParked) {
      arr[newCapacity].capacity = arr[newCapacity].capacity + 1;
      this.setState({
        isParked: null,
        capacity: arr
      });
    } else {
      arr[newCapacity].capacity = arr[newCapacity].capacity - 1;
      this.setState({
        isParked: e.target.value,
        capacity: arr
      });
    }
  }

  render() {
    const { parkings } = this.props.parking;
    const { isParked, capacity } = this.state;

    return (
      <div>
        <div className="header parkings">
          <h1>Public parkings Ghent</h1>
        </div>
        <div className="container">
          <div className="row">
            {parkings.map(parking => (
              <ParkingCard
                key={parking.id}
                parking={parking}
                park={this.setParked}
                state={isParked}
                capacity={capacity}
              />
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
