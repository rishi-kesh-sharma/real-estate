import CustomSlider from "@/components/utils/CustomSlider";
import { list } from "@/data/Data";
import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

const Slider = () => {
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
          slidesToShow: 3,
          centerMode: false,
        },
      },

      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
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
    <div className="my-[1rem] py-[1rem] ">
      <CustomSlider settings={settings}>
        {" "}
        {list.map((featured, index) => {
          return <FeaturedPropertyCard featured={featured} key={index} />;
        })}
      </CustomSlider>
    </div>
  );
};

export default Slider;
