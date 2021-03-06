import axios from "axios";
import React from "react";
import "./AddCamping.css";
import { useForm } from "react-hook-form";

const AddCamping = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://fast-hamlet-25148.herokuapp.com/campings", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="my-5 add-camping">
      <h2 className="mb-4">Add A New Camping</h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <input
              className="w-25"
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
          </div>
          <div className="mb-2">
            <textarea
              className="w-25"
              {...register("bookingdetails")}
              placeholder="Booking Details"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-25"
              type="number"
              {...register("cost")}
              placeholder="Cost"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-25"
              {...register("img")}
              placeholder="Image URL"
            />
          </div>
          <input className="w-25" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddCamping;
