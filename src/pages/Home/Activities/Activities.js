import React from "react";
import "./Activities.css";
import mountainHiking from "../../../images/activities/hiking.jpg";
import zipline from "../../../images/activities/zipline.jpg";
import bikeRide from "../../../images/activities/bike.jpg";
import bonfire from "../../../images/activities/bonfire.jpg";
import horseRiding from "../../../images/activities/horse.jpg";

const Activities = () => {
  return (
    <div className="container">
      <h2 className="text-warning">Adventer Activities</h2>
      <div className="d-flex justify-content-center">
        <div className="my-5 w-75 shadow">
          <div className="row pb-3 mb-3 border-bottom">
            <div className="col-md-4">
              <img
                className="img-fluid activitie"
                src={mountainHiking}
                alt=""
              />
            </div>
            <div className="col-md-8 text-start">
              <h4>Mountains Hiking</h4>
              <p>
                Hiking is a long, vigorous walk, usually on trails or footpaths
                in the countryside. Walking for pleasure developed in Europe
                during the eighteenth century.
              </p>
            </div>
          </div>
          <div className="row row pb-3 mb-3 border-bottom">
            <div className="col-md-4">
              <img className="img-fluid activitie" src={zipline} alt="" />
            </div>
            <div className="col-md-8 text-start">
              <h4>Zipline</h4>
              <p>
                A zip-line, zip line, zip-wire, or zip-power-line is a pulley
                suspended on a cable, usually made of stainless steel, mounted
                on a slope.
              </p>
            </div>
          </div>
          <div className="row row pb-3 mb-3 border-bottom">
            <div className="col-md-4">
              <img className="img-fluid activitie" src={bikeRide} alt="" />
            </div>
            <div className="col-md-8 text-start">
              <h4>Bike Riding</h4>
              <p>
                Bikeride was an American indie rock band fronted by Tony
                Carbone. Their record companies of the past have included is
                Hidden Agenda, a part of Parasol Records, and Choclaty! Records.
              </p>
            </div>
          </div>
          <div className="row row pb-3 mb-3 border-bottom">
            <div className="col-md-4">
              <img className="img-fluid activitie" src={bonfire} alt="" />
            </div>
            <div className="col-md-8 text-start">
              <h4>Bonfire</h4>
              <p>
                A bonfire is a large and controlled outdoor fire, used either
                for informal disposal of burnable waste material or as part of a
                celebration.
              </p>
            </div>
          </div>
          <div className="row row pb-3">
            <div className="col-md-4">
              <img className="img-fluid activitie" src={horseRiding} alt="" />
            </div>
            <div className="col-md-8 text-start">
              <h4>Horse Riding</h4>
              <p>
                Equestrianism commonly known as horse riding (British English)
                or horseback riding, includes the disciplines of riding,
                driving, and vaulting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
