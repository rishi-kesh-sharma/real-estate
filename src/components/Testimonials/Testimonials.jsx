import React from "react";
import Back from "../common/Back";
import styles from "./Testimonials.module.css";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/Data";
import CustomSlider from "../utils/CustomSlider";

import img from "../../../public/images/general/house.jpg";

const Testimonials = () => {
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
    <>
      <section
        className={`${styles.contact} ${styles.mb}  contact mb pt-[5rem] flex flex-col gap-[3rem]`}>
        <Back
          name="Testimonials"
          title="What People Say About Us"
          cover={img.src}
        />
        <div className={`${styles.container} container bg-gray-100 py-[4rem]`}>
          <CustomSlider settings={settings}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard testimonial={testimonial} key={index} />
            ))}
          </CustomSlider>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
