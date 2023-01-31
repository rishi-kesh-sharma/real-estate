import React from "react";
import styled from "./CategoryTypes.module.css";

const CategoryTypeCard = ({ feature }) => {
  return (
    <>
      <div className=" min-w-[200px] max-w-[250px] bg-white ">
        <div
          className={`${styled.box} box flex flex-col items-center justify-start`}>
          <img src={feature.cover} alt="" />
          <h4 className="text-gray-600">{feature.name}</h4>
          <label className="text-gray-400">{feature.total}</label>
        </div>
      </div>
    </>
  );
};

export default CategoryTypeCard;
