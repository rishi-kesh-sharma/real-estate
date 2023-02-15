import React from "react";
import Heading from "../../../utils/Heading";
import { list } from "../../../../data/Data";

import styled from "./index.module.css";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import CustomSlider from "../../../utils/CustomSlider";

const FeaturedProperties = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    className: "center",

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
      <section
        className={`${styled.recent} ${styled.padding} mt-[3rem] bg-gray-50 py-[2rem] `}
      >
        <div className="container ">
          <Heading
            title="Featured Properties"
            subtitle="look our featured properties"
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
