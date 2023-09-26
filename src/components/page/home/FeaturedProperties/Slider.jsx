import CustomSlider from "@/components/utils/CustomSlider";
import { list } from "@/data/Data";
import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

const Slider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      // {
      //   breakpoint: 650,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-5 xl:grid-cols-4 xs:grid-cols-2">
      {/* <CustomSlider settings={settings}> */}{" "}
      {list.map((featured, index) => {
        return <FeaturedPropertyCard featured={featured} key={index} />;
      })}
      {/* </CustomSlider> */}
    </div>
  );
};

export default Slider;
