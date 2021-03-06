import React from "react";
import AddCamping from "../AddCamping/AddCamping";
import ManageBooking from "../ManageBooking/ManageBooking";
import MyBooking from "../MyBooking/MyBooking";
import ReviewPage from "../Review/ReviewPage";

const Dashboard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="addCamping-tab"
            data-bs-toggle="tab"
            data-bs-target="#addCamping"
            type="button"
            role="tab"
            aria-controls="addCamping"
            aria-selected="true"
          >
            AddNewProducts
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="MyBooking-tab"
            data-bs-toggle="tab"
            data-bs-target="#MyBooking"
            type="button"
            role="tab"
            aria-controls="MyBooking"
            aria-selected="false"
          >
            My Booking
          </button>
        </li>

        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="manageBooking-tab"
            data-bs-toggle="tab"
            data-bs-target="#manageBooking"
            type="button"
            role="tab"
            aria-controls="manageBooking"
            aria-selected="false"
          >
            Manage Booking
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="review-tab"
            data-bs-toggle="tab"
            data-bs-target="#review"
            type="button"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            Review
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="addCamping"
          role="tabpanel"
          aria-labelledby="addCamping-tab"
        >
          <AddCamping></AddCamping>
        </div>

        <div
          class="tab-pane fade"
          id="MyBooking"
          role="tabpanel"
          aria-labelledby="MyBooking-tab"
        >
          <MyBooking></MyBooking>
        </div>

        <div
          class="tab-pane fade"
          id="manageBooking"
          role="tabpanel"
          aria-labelledby="manageBooking-tab"
        >
          <ManageBooking></ManageBooking>
        </div>
        <div
          class="tab-pane fade"
          id="review"
          role="tabpanel"
          aria-labelledby="review-tab"
        >
          <ReviewPage></ReviewPage>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
