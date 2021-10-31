import React, { useEffect, useState } from "react";
import Camping from "../Camping/Camping";

const Campings = () => {
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    fetch("https://fast-hamlet-25148.herokuapp.com/campings")
      .then((res) => res.json())
      .then((data) => setCampings(data));
  }, []);

  return (
    <div className="container my-5" id="camping">
      <h2 className="text-warning">Tent Camping</h2>
      <div className="row g-4 mt-4">
        {campings.map((camping) => (
          <Camping key={camping._id} camping={camping}></Camping>
        ))}
      </div>
    </div>
  );
};

export default Campings;
