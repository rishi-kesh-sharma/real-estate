import React from "react";

import CustomSlider from "@/components/utils/CustomSlider";
import { list } from "./../../../../data/Data";
import ExploreHomesCard from "./ExploreHomesCard";
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
        breakpoint: 1450,
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
        breakpoint: 800,
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
    <div className="mt-5 grid xs:grid-cols-2  gap-5  lg:grid-cols-3 xl:grid-cols-4">
      {/* <CustomSlider settings={settings}> */}
      {list.map((property, index) => (
        <ExploreHomesCard property={property} id={index} />
      ))}
      {/* </CustomSlider> */}
    </div>
  );
};

export default Slider;
