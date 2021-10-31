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
      <h2>Adventer Activities</h2>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                vero dolorum dolores quia ratione odit, obcaecati?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                vero dolorum dolores quia ratione odit, obcaecati?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                vero dolorum dolores quia ratione odit, obcaecati?
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                vero dolorum dolores quia ratione odit, obcaecati?
              </p>
            </div>
          </div>
          <div className="row row pb-3">
            <div className="col-md-4">
              <img className="img-fluid activitie" src={horseRiding} alt="" />
            </div>
            <div className="col-md-8 text-start">
              <h4>Mountains Hiking</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                vero dolorum dolores quia ratione odit, obcaecati?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
