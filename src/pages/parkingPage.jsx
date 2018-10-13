import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getParking } from "../actions/parkingActions";
import ParkingDetail from "../components/ParkingDetail";

class ParkingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isParked: null
    };
  }

  componentDidMount() {
    this.props.getParking(this.props.match.params.id);
  }

  render() {
    const { parkings } = this.props.parking;

    return (
      <div>
        {parkings.map(data => {
          return <ParkingDetail key={data.id} parking={data} />;
        })}
      </div>
    );
  }
}

ParkingPage.propTypes = {
  parking: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  parking: state.parking
});

export default connect(
  mapStateToProps,
  {
    getParking
  }
)(ParkingPage);
