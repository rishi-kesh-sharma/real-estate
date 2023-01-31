import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomSlider({ children, settings }) {
  return (
    <Slider
      className="py-[1rem] flex items-center justify-center "
      {...settings}>
      {children}
    </Slider>
  );
}
