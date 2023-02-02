import React from "react";
import styled from "./Testimonials.module.css";

const TestimonialCard = ({ testimonial }) => {
  return (
    <>
      <div className=" min-w-[220px] max-w-[270px] bg-white flex flex-col gap-[1rem] shadow-sm mx-[1rem] px-[0.7rem] py-[0.5rem] ">
        <p className="text-gray-400 text-sm">{testimonial.text}</p>
        <hr />
        <div
          className={`${styled.box} box flex  gap-[1rem] items-center justify-start`}>
          <img
            src={testimonial.avatar}
            alt=""
            className="w-[50px] h-[50px] rounded-full"
          />
          <h4 className="text-green-400">{testimonial.profession}</h4>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
