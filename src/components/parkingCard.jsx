import React from "react";
import { Images } from "../assets/js/parkingImages";

const ParkingCard = ({ parking, park, state }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="parkingCard">
        <img src={Images[parking.id]} alt="" />
        <div className="parkingInfo">
          <a href="#">{parking.name}</a>
          <div className="status">
            <p>
              <strong>Capacity:</strong> <br /> {parking.parkingStatus.availableCapacity}/
              {parking.parkingStatus.totalCapacity}
            </p>
            <p class={parking.parkingStatus.open ? "open" : "closed"}>
              <strong>status:</strong> <br />
              {parking.parkingStatus.open ? "Open" : "Gesloten"}
            </p>
            <button class={state == parking.id ? "parked" : "not-parked"} onClick={park} value={parking.id}>
              {state == parking.id ? "Leave" : "Park here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
