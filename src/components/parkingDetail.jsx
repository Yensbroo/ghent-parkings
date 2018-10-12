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
          Terug
        </Link>
        <div className="row mt-4">
          <div className="col-lg-6">
            <img className="img-fluid" src={Images[parking.id]} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="parkingItem">
                  <p>
                    <strong>Address:</strong> <br />
                    {parking.address}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="parkingItem">
                  <p>
                    <strong>Contact:</strong> <br />
                    {parking.contactInfo}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="parkingItem">
                  <p>
                    <strong>
                      Status: <br />
                    </strong>
                    {parking.parkingStatus.open ? "Open" : "Closed"}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="parkingItem">
                  <p>
                    <strong>Capacity: </strong> <br />
                    {parking.parkingStatus.availableCapacity}/{parking.parkingStatus.totalCapacity}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h3 className="col-lg-12 mb-3">Openingsuren</h3>
            <div className="col-lg-12 d-flex">
              {parking.openingTimes.map(item => {
                return item.days.map(day => {
                  return (
                    <p key={day} className="day">
                      <strong>{day}:</strong> <br />
                      from {item.from} <br /> to {item.to}
                    </p>
                  );
                });
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingDetail;
