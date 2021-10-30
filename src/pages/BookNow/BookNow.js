import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";
import axios from "axios";

const BookNow = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loginUser, setLoginUser] = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/campings")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const singleData = details.find(
    (camping) => parseInt(camping._id) === parseInt(id)
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const bookingData = { ...data, ...singleData };
    console.log(data);
    axios.post("http://localhost:5000/bookings", bookingData).then((res) => {
      if (res.data.insertedId) {
        alert("booking successfully");
      }
    });
  };

  return (
    <div className="container">
      <h1 className="my-5">Booking Details</h1>
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-4">
              <img className="img-fluid" src={singleData?.img} alt="" />
            </div>
            <div className="col-md-8 text-start">
              <h2>{singleData?.name}</h2>
              <p>{singleData?.bookingdetails}</p>
              <h6>Cost: {singleData?.cost}$ For 24hour</h6>
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
                {...register("name", { required: true })}
              />
            </div>
            <div className="mb-2">
              <input {...register("address", { required: true })} />
            </div>
            <div className="mb-2">
              <input
                type="number"
                {...register("phoneNumber", { required: true })}
              />
            </div>

            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" value="Check Out" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
