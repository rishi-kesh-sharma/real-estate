import React from "react";
import Hero from "./hero/Hero";
// import Awards from "./awards/Awards";
// import Featured from "./featured/Featured";
// import Location from "./location/Location";
// import Price from "./price/Price";
// import Recent from "./recent/Recent";

// import Team from "./team/Team";
import CategoryTypes from "../popularCategoryTypes/CategoryTypes";
import Recent from "../recent/Recent";
import FeaturedProperties from "../featuredProperties/FeaturedProperties";
import FeaturedAgencies from "../FeaturedAgencies/FeaturedAgencies";
import Footer from "../common/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <CategoryTypes />
      <FeaturedProperties />
      <Recent />
      <FeaturedAgencies />
      {/* <Awards /> */}
      {/* <Location /> */}
      {/* <Team /> */}
      {/* <Price /> */}
    </>
  );
};

export default Home;
