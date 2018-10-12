import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getParking } from "../actions/parkingActions";
//import { getParkings } from "../api/parkingAPI";
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
    const { parkings, loading } = this.props.parking;
    const parking = parkings.map(data => {
      return <ParkingDetail key={data.id} parking={data} />;
    });
    let parkingContent;

    if (parkings === null || loading) {
      parkingContent = <div>Parkings loading</div>;
    } else {
      parkingContent = parking;
    }
    return <div>{parkingContent}</div>;
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
