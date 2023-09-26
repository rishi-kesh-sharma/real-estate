import Image from "next/image";
import React from "react";

const Back = ({ name, title, cover }) => {
  return (
    <div className="">
      <div className="back">
        <div className=" flex flex-col gap-[2rem]">
          <span className="text-lg text-gray-300">{name}</span>
          <h1 className="text-4xl">{title}</h1>
        </div>
        <img src={cover} alt="" width={'100%'} height={'100%'} />
      </div>
    </div>
  );
};

export default Back;
