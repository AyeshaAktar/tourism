import React from "react";
import Reviews from "../../Review/Reviews";
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
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
