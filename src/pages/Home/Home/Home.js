import React from "react";
import Activities from "../Activities/Activities";
import Banner from "../Banner/Banner";
import Campings from "../Campings/Campings";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Campings></Campings>
      <Activities></Activities>
      <LatestNews></LatestNews>
    </div>
  );
};

export default Home;
