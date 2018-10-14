import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../assets/js/parkingImages";

const ParkingDetail = ({ parking }) => {
  return (
    <div>
      <div className="header parking">
        <h1>{parking.name}</h1>
      </div>
      <div className="container">
        <Link to="/" className="back">
          Back
        </Link>
        <div className="row mt-4">
          <div className="col-lg-6">
            <img className="img-fluid" src={Images[parking.id]} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="parkingHours">
              <h4 className="mb-3">Opening hours</h4>
              {parking.openingTimes.map(item => {
                return item.days.map(day => {
                  return (
                    <p>
                      <strong>{day}: </strong>
                      {item.from} to {item.to}
                    </p>
                  );
                });
              })}
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-3 mb-3">
            <div className="parkingItem">
              <p>
                <strong>Address:</strong> <br />
                {parking.address}
              </p>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="parkingItem">
              <p>
                <strong>Contact:</strong> <br />
                {parking.contactInfo}
              </p>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="parkingItem">
              <p>
                <strong>
                  Status: <br />
                </strong>
                {parking.parkingStatus.open ? "Open" : "Closed"}
              </p>
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <div className="parkingItem">
              <p>
                <strong>Capacity: </strong> <br />
                {parking.parkingStatus.availableCapacity}/{parking.parkingStatus.totalCapacity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingDetail;
