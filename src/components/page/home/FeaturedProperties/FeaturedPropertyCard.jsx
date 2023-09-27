import React, { useState } from "react";
import styled from "./index.module.css";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import Image from "next/image";
import Card from "@/components/utils/Card";
import CardImage from "@/components/utils/CardImage";
import CardContent from "@/components/utils/CardContent";
import Link from "next/link";

const FeaturedPropertyCard = ({ featured }) => {
  const { image, category, location, name, price, type } = featured;
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = (e) => {
    setIsLiked(!isLiked);
  };
  return (
    <Link href={`property/${featured.id}`} className="w-[100%]">
      <Card className="w-[100%] rounded-lg shadow-lg bg-white items-start p-[0.4rem]">
        <CardImage className="rounded-lg sm:h-[200px] xs:h-[180px] lg:h-[200px] w-[100%]">
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
            <div className="flex items-center">
              <p className="py-[0.1rem] text-center font-semibold text-sm">
                {price}
              </p>
              <p htmlFor="" className="text-center text-gray-400 text-xs">
                /sqft
              </p>
            </div>
            <span className="text-sm text-gray-400">{type}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default FeaturedPropertyCard;
