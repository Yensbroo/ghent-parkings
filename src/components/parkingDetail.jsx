import React from "react";
import { Images } from "../assets/js/parkingImages";

const ParkingDetail = ({ parking }) => {
  return (
    <div>
      <div className="header parking">
        <h1>{parking.name}</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="img-fluid" src={Images[parking.id]} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 mb-3">
                <div className="parkingItem">
                  <p>
                    Address: <br />
                    {parking.address}
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="parkingItem">
                  <p>{parking.contactInfo}</p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <div className="parkingItem">
                  <p>{parking.parkingStatus.open ? "Open" : "Closed"}</p>
                </div>
              </div>
              <div className="col-lg-6 mb-3">
                <button className="parkBtn">Park here</button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingDetail;
