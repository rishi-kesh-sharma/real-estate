import React from "react";
import styled from "./FeaturedAgencies.module.css";

const FeaturedAgencyCard = ({ agency }) => {
  return (
    <>
      <div className=" w-[280px] h-[200px]  bg-white">
        <div
          className={`${styled.box} box flex flex-col items-center justify-start`}
        >
          <img src={agency.cover} alt="" />
          <h4>{agency.name}</h4>
          <label>{agency.total}</label>
        </div>
      </div>
    </>
  );
};

export default FeaturedAgencyCard;
