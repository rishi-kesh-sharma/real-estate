import React from "react";
import styled from "./FeaturedAgencies.module.css";

const FeaturedAgencyCard = ({ agency }) => {
  return (
    <>
      <div className=" w-[220px] h-[170px] bg-white">
        <div
          className={`${styled.box} box flex flex-col items-center gap-2 justify-center h-[100%] w-[100%]`}>
          <img src={agency.cover} alt="" />
          <div>
            <h4 className="text-gray-600">{agency.name}</h4>
            <label className="text-gray-400">{agency.total}</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedAgencyCard;
