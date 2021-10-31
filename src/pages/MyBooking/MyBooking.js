import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import "./MyBooking.css";

const MyBooking = () => {
  const [loginUser, setLoginUser] = useContext(AuthContext);

  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch(
      "https://fast-hamlet-25148.herokuapp.com/orderEmail?email=" +
        loginUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  // const handleCancle = (id) => {};

  console.log(orderList);
  return (
    <div className="mybooking">
      <div className="container my-5">
        <h2 className="mb-5">Booking: {orderList.length}</h2>
        {orderList.map((booking) => (
          <div>
            <div className="row pb-3 mb-3 border-bottom">
              <div className="col-md-4">
                <img
                  className="img-fluid activitie"
                  src={booking?.img}
                  alt=""
                />
              </div>
              <div className="col-md-8 text-start">
                <h4>{booking?.name}</h4>
                <h6>Cost: {booking?.cost}</h6>
                <p>
                  <strong>Booking Id:</strong> {booking?._id}
                </p>
                <button className="btn btn-danger">cancle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
