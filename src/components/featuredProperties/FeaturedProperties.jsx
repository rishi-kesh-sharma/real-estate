import React from "react";
import Heading from "../common/Heading";
import { list } from "../../data/Data";

import styled from "./FeaturedProperties.module.css";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import CustomSlider from "../utils/CustomSlider";

const FeaturedProperties = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",
    // centerPadding: "100px",

    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={`${styled.recent} ${styled.padding} mt-[3rem] `}>
        <div className="container ">
          <Heading
            title="Featured Properties"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <div className="my-[1rem] ">
            <CustomSlider settings={settings}>
              {" "}
              {list.map((featured, index) => {
                return <FeaturedPropertyCard featured={featured} key={index} />;
              })}
            </CustomSlider>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProperties;
