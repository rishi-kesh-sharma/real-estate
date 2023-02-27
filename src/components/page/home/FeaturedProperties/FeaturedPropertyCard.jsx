import React, { useState } from "react";
import styled from "./index.module.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Image from "next/image";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";

const FeaturedPropertyCard = ({ featured }) => {
  const { image, category, location, name, price, type } = featured;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <Card className="w-[175px] rounded-lg shadow-lg bg-white items-start p-[0.4rem] xs:w-[250px] md:w-[280px] lg:w-[340px] ">
      <CardImage className="rounded-lg h-[100px] xs:h-[180px] lg:h-[200px] w-full">
        <Image src={image} className="rounded-lg" />
      </CardImage>
      <CardContent className={`gap-[0.2rem] w-[100%]`}>
        <div className={`flex items-start justify-between category`}>
          <span
            className="mt-0 text-sm"
            style={{
              background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
              color: category === "For Sale" ? "#25b579" : "#ff9800",
            }}>
            {category}
          </span>
          {isLiked ? (
            <FcLike onClick={handleLikeClick} />
          ) : (
            <FcLikePlaceholder onClick={handleLikeClick} />
          )}
        </div>
        <h4 className="text-sm">{name}</h4>
        <p className="text-xs text-gray-400">{location}</p>
        <div className="flex flex-col gap-[0.1rem] xs:flex-row xs:justify-between">
          <div className="flex items-center gap-[0.4rem]">
            <button className="px-1 py-[0.1rem] text-center font-extralight">
              {price}
            </button>{" "}
            <label htmlFor="" className="text-center text-gray-400">
              /sqft
            </label>
          </div>
          <span className="text-sm text-gray-400">{type}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedPropertyCard;
