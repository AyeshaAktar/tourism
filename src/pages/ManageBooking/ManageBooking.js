import React, { useEffect, useState } from "react";
import "./ManageBooking.css";

const ManageBooking = () => {
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    fetch("https://fast-hamlet-25148.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookingDetails(data));
  }, []);
  console.log(bookingDetails);

  const handleDelete = (id) => {
    const url = `https://fast-hamlet-25148.herokuapp.com/DeleteBookings/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("delete successfully", data);
      });
  };

  return (
    <div className="managebooking">
      <div className="container">
        <h2>Manage All Bookings</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookingDetails.map((booking) => (
              <tr>
                <td>{booking?.userName}</td>
                <td>{booking?.phoneNumber}</td>
                <td>Otto</td>
                <td>
                  <button
                    key={booking._id}
                    onClick={() => handleDelete(booking?._id)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBooking;
