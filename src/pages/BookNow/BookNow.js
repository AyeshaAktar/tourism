import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const BookNow = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const singleData = details.find(
    (camping) => parseInt(camping.id) === parseInt(id)
  );
  return (
    <div className="container">
      <h1 className="my-5">Booking Details</h1>
      <img className="img-fluid" src={singleData?.img} alt="" />
      <div className="py-3">
        <h2>{singleData?.name}</h2>
        <p>{singleData?.bookingdetails}</p>
        <p>Cost: {singleData?.cost} For 24hour</p>
      </div>
    </div>
  );
};

export default BookNow;
