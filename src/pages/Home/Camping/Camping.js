import React from "react";
import "./Camping.css";
import { Link } from "react-router-dom";

const Camping = (props) => {
  const { _id, name, img, bookingdetails, cost } = props.camping;
  return (
    <div className="col-md-4">
      <div className="card m-3 camping-card">
        <img src={img} className="card-img-top camping-img" alt="..." />
        <div className="card-body text-start">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{bookingdetails}...</p>
          <Link to={`/bookNow/${_id}`}>
            <button type="button" className="btn btn-warning">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Camping;
