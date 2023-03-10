import CardImage from "@/components/utils/CardImage";
import Image from "next/image";
import React from "react";
import Card from "./../../../utils/Card";
import { AiOutlineRight } from "react-icons/ai";

const ExploreHomesCard = ({ property, key }) => {
  const full = key % 5 == 0;

  return (
    <Card
      className={`w-[180px]   relative p-0  rounded-lg md:w-[290px] lg:w-[260px]`}>
      <CardImage className="relative ">
        <div className="absolute z-[20] bg-gray-600 opacity-50 left-0 top-0 bottom-0 right-0 rounded-lg"></div>

        <Image
          src={property.image}
          className="h-[330px] object-cover rounded-lg"
        />
      </CardImage>
      <div>
        <p className="absolute z-[25] top-[1rem] left-[1rem] text-white font-semibold text-lg">
          {property.location}
        </p>
        <button className=" bg-green-600 rounded-lg text-gray-200 absolute z-[25] flex gap-[0.5rem] items-center justify-center h-[2.4rem] w-[8rem] font-light text-sm m-0 p-0 left-[1rem] bottom-[3rem]">
          View Homes
          <AiOutlineRight />
        </button>
      </div>
    </Card>
  );
};

export default ExploreHomesCard;
