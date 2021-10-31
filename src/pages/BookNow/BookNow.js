import React, { useContext, useEffect, useState } from "react";
import "./BookNow.css";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const BookNow = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loginUser, setLoginUser] = useContext(AuthContext);

  console.log(details);
  useEffect(() => {
    fetch(`https://fast-hamlet-25148.herokuapp.com/campings/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { name, img, cost, bookingdetails } = details;
    const bookingData = {
      ...data,
      name,
      img,
      cost,
      bookingdetails,
      bookingStatus: "pending",
    };
    console.log(data);
    axios
      .post("https://fast-hamlet-25148.herokuapp.com/bookings", bookingData)
      .then((res) => {
        if (res.data.insertedId) {
          alert("booking successfully");
        }
      });
  };

  return (
    <div className="container">
      <h1 className="my-5">Booking Details</h1>
      <div className="row">
        <div className="col-md-7 border">
          <div className="row py-3">
            <div className="col-md-4">
              <img className="img-fluid image" src={details?.img} alt="" />
            </div>
            <div className="col-md-8 text-start">
              <h2 className="text-warning">{details?.name}</h2>
              <p>{details?.bookingdetails}</p>
              <h6>Cost: {details?.cost}$ For 24hour</h6>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <h2>Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <input
                defaultValue={loginUser.email}
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-2">
              <input
                defaultValue={loginUser.displayName}
                {...register("userName", { required: true })}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Address"
                {...register("address", { required: true })}
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Phone Number"
                type="number"
                {...register("phoneNumber", { required: true })}
              />
            </div>

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" value="Booking" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
