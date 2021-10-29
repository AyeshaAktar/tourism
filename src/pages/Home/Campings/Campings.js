import React, { useEffect, useState } from "react";
import Camping from "../Camping/Camping";

const Campings = () => {
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => setCampings(data));
  }, []);

  return (
    <div className="container" id="camping">
      <h2>Tent Camping</h2>
      <div className="row g-4">
        {campings.map((camping) => (
          <Camping camping={camping}></Camping>
        ))}
      </div>
    </div>
  );
};

export default Campings;
