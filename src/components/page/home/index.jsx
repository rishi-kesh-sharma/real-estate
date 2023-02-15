import React from "react";
import Hero from "./Hero";
// import Awards from "./awards/Awards";
// import Featured from "./featured/Featured";
// import Location from "./location/Location";
// import Price from "./price/Price";
// import Recent from "./recent/Recent";

// import Team from "./team/Team";
import CategoryTypes from "./PopularCategoryTypes";
import Recent from "./Recent";
import FeaturedProperties from "./FeaturedProperties";
import FeaturedAgencies from "./FeaturedAgencies";
import Blogs from "./Blogs";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryTypes />
      <FeaturedProperties />
      <Recent />
      {/* <Blogs /> */}
      {/* <FeaturedAgencies /> */}
      {/* <Awards /> */}
      {/* <Location /> */}
      {/* <Team /> */}
      {/* <Price /> */}
    </>
  );
};

export default Home;
