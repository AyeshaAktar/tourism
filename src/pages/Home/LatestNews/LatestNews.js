import React from "react";
import "./LatestNews.css";
import summre from "../../../images/latest-news/summer.jpg";
import winter from "../../../images/latest-news/winter.jpg";

const LatestNews = () => {
  return (
    <div className="container">
      <h2>Letest News</h2>
      <div class="row row-cols-1 row-cols-md-2 g-5 my-3">
        <div class="col">
          <div class="card">
            <img src={summre} class="card-img-top image" alt="..." />
            <div class="card-body">
              <h3 class="card-title text-warning">Summer Camping</h3>
              <h6>
                <strong>Time & Date:</strong> 1st August - 5th August
              </h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={winter} class="card-img-top image" alt="..." />
            <div class="card-body">
              <h3 class="card-title text-warning">Winter Camping</h3>
              <h6>
                <strong>Time & Date:</strong> 10th November - 15th November
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
