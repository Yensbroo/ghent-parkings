import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../assets/js/parkingImages";

const ParkingCard = ({ parking, park, state, capacity }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="parkingCard">
        <img src={Images[parking.id]} alt="" />
        <div className="parkingInfo">
          <Link to={`/${parking.id}`}>{parking.name}</Link>
          <div className="status">
            <p>
              <strong>Capacity:</strong> <br />{" "}
              {capacity
                //get capacity from state and filter to parking with the same id
                .filter(c => {
                  return c.id == parking.id;
                })
                .map(c => {
                  return c.capacity;
                })}
              /{parking.parkingStatus.totalCapacity}
            </p>
            <p className={parking.parkingStatus.open ? "open" : "closed"}>
              <strong>status:</strong> <br />
              {parking.parkingStatus.open ? "Open" : "Gesloten"}
            </p>
            <button className={state == parking.id ? "parked" : "not-parked"} onClick={park} value={parking.id}>
              {state == parking.id ? "Leave" : "Park here"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
