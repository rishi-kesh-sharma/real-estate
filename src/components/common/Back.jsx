import React from "react";

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className="back">
        <div className="container flex flex-col gap-[2rem]">
          <span className="text-lg text-gray-300">{name}</span>
          <h1 className="text-4xl">{title}</h1>
        </div>
        <img src={cover} alt="" />
      </div>
    </>
  );
};

export default Back;
